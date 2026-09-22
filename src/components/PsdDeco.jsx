import { psdLen } from './Psd.jsx'

// psdLen now lives with the rest of the PSD primitives; re-exported so the
// existing `import { psdLen } from './PsdDeco'` call sites keep working.
export { psdLen, PsdStage, PsdBox, PsdText, psdUnit } from './Psd.jsx'

export default function PsdDeco({
  src,
  left,
  right,
  top,
  width,
  height,
  className = '',
  ...rest
}) {
  const style = {
    width: psdLen(width),
    height: psdLen(height)
  }
  if (left != null) style.left = psdLen(left)
  if (right != null) style.right = psdLen(right)
  if (top != null) style.top = typeof top === 'number' ? psdLen(top) : top

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 max-w-none select-none ${className}`}
      style={style}
      {...rest}
    />
  )
}
