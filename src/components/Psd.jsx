/**
 * PSD layout primitives.
 *
 * One markup tree serves both renders. Base styles are the mobile reflow; the
 * absolute PSD coordinates in `src/styles.css` only switch on at `xl` (1200px),
 * so below 1200px every node stays in normal document flow and is styled purely
 * by the `className` you pass.
 *
 * All x/y/w/h/size values are raw PSD pixels on the 1920 artboard. They are
 * emitted as the `--x/--y/--w/--h` custom properties and multiplied by `--u`
 * (1 PSD px, see styles.css) so the desktop render is pixel-identical at every
 * width from 1200 up, caps at 1920, and centres above that.
 *
 *   <PsdStage h={1349} className="bg-white py-12">      // section, PSD height
 *     <PsdBox x={160} y={84} w={1600} className="mb-6"> // absolute at xl only
 *     <PsdText as="h2" size={87.3} x={160} y={84} />    // PsdText can position too
 *   </PsdStage>
 *
 * Negative x/y are supported (several PSD decorations start off-canvas at x=-45).
 *
 * Intentional calc(): only here and in `src/styles.css` `@layer psd` (`--u`, `.psd-*`).
 * Section JSX should use Tailwind fixed rem/px, not calc().
 */
import { forwardRef } from 'react'

/** Raw desktop length in PSD px: `calc(<n> * var(--u))`. Use inside xl-only styles. */
export function psdUnit(n) {
  return `calc(${n} * var(--u))`
}

/**
 * Responsive length in PSD px that never collapses: scales with `--u`,
 * caps at `n` PSD px, and floors at ~42% of `n` on small screens.
 * Safe to use at every breakpoint, including the mobile flow.
 */
export function psdLen(n) {
  const abs = Math.abs(n)
  const min = Math.max(6, Math.round(abs * 0.42))
  const val = `max(${min}px, calc(${abs} * var(--u)))`
  return n < 0 ? `calc(-1 * max(${min}px, calc(${abs} * var(--u))))` : val
}

function geometry(x, y, w, h) {
  const style = {}
  const classes = []

  if (x != null || y != null) {
    // Both are always written so a nested box can never inherit a parent's value.
    style['--x'] = String(x ?? 0)
    style['--y'] = String(y ?? 0)
    classes.push('psd')
  }
  if (w != null) {
    style['--w'] = String(w)
    classes.push('psd-w')
  }
  if (h != null) {
    style['--h'] = String(h)
    classes.push('psd-h')
  }

  return { style, classes }
}

function join(...parts) {
  return parts.filter(Boolean).join(' ')
}

/**
 * Section wrapper. Establishes the positioning context for its `PsdBox`
 * children and pins the section to its PSD height at xl.
 *
 * @param {number} h        PSD height of the section (e.g. Intro 921-2270 -> 1349)
 * @param {string} as       element type, default 'section'
 * @param {string} className extra classes, applied at every breakpoint
 */
export function PsdStage({ as: Tag = 'section', h, className = '', style, children, ...rest }) {
  return (
    <Tag
      className={join('psd-stage', className)}
      style={h != null ? { '--h': String(h), ...style } : style}
      {...rest}
    >
      {/* Vanishes below xl (display: contents) so children keep the stage's own
          flow context; above xl it is the centred 1920-wide coordinate space. */}
      <div className="psd-stage-inner">{children}</div>
    </Tag>
  )
}

/**
 * Absolutely positioned box at xl, plain block below it.
 *
 * Omit x/y to leave the box in flow and use it purely for its PSD width/height,
 * which is how the Services photo frames sit inside their scroller.
 *
 * @param {number} x        PSD left, may be negative
 * @param {number} y        PSD top, may be negative
 * @param {number} [w]      PSD width; omit to let the element size itself
 * @param {number} [h]      PSD height; omit to size to content (text boxes)
 * @param {string} as       element type, default 'div'
 * @param {string} className extra classes, applied at every breakpoint
 */
export const PsdBox = forwardRef(function PsdBox(
  { as: Tag = 'div', x, y, w, h, className = '', style, children, ...rest },
  ref
) {
  const { style: vars, classes } = geometry(x, y, w, h)

  return (
    <Tag ref={ref} className={join(...classes, className)} style={{ ...vars, ...style }} {...rest}>
      {children}
    </Tag>
  )
})

/**
 * Text sized in PSD px. Accepts the same optional x/y/w/h as `PsdBox`, so a
 * positioned heading needs one element rather than two.
 *
 * @param {number} size     PSD font size; renders max(floor, calc(size * var(--u)))
 * @param {number|string} [leading]  unitless ratio, or a PSD px leading (>= 4,
 *                                   converted to `leading / size`), or raw CSS
 * @param {number|string} [tracking] em as a number (-0.025), or raw CSS
 * @param {number} [weight] font-weight
 * @param {number} [minSize] override the small-screen floor in px
 * @param {string} as       element type, default 'span' - pass 'h2'/'h3' for headings
 */
export function PsdText({
  as: Tag = 'span',
  size,
  leading,
  tracking,
  weight,
  minSize,
  x,
  y,
  w,
  h,
  className = '',
  style,
  children,
  ...rest
}) {
  const { style: vars, classes } = geometry(x, y, w, h)
  const text = {}

  if (size != null) {
    const floor = minSize != null ? minSize : Math.min(32, Math.max(12, Math.round(size * 0.42)))
    text.fontSize = `max(${floor}px, calc(${size} * var(--u)))`
  }
  if (leading != null) {
    text.lineHeight =
      typeof leading === 'string' ? leading : leading >= 4 && size ? leading / size : leading
  }
  if (tracking != null) {
    text.letterSpacing = typeof tracking === 'string' ? tracking : `${tracking}em`
  }
  if (weight != null) text.fontWeight = weight

  return (
    <Tag className={join(...classes, className)} style={{ ...vars, ...text, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
