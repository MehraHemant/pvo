import Chevron from './Chevron.jsx'

const BASE =
  'grid cursor-pointer place-items-center rounded-full border border-pvo-carousel/20 bg-white/90 text-pvo-carousel shadow-pvo-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pvo-carousel'

/**
 * Carousel previous/next button. Size and placement come from `className`,
 * since the hero sits its controls in a bar and the section rows flank theirs.
 *
 * @param {boolean} back  point at the previous slide rather than the next
 * @param {string}  label aria-label; every arrow needs its own wording
 */
export default function CarouselArrow({ back = false, label, onClick, className = '' }) {
  const marker = back ? { 'data-carousel-prev': '' } : { 'data-carousel-next': '' }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${BASE} ${className}`.trim()}
      {...marker}
    >
      <Chevron back={back} />
    </button>
  )
}
