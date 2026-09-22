/** One dot per slide — count comes from the carousel, not a fixed PSD row. */
export default function CarouselDots({
  count,
  index,
  onSelect,
  groupLabel,
  itemLabel = (i) => `Slide ${i + 1}`,
  borderClass = 'border-[#2E3C4E]',
  fillClass = 'bg-[#2E3C4E]'
}) {
  if (count < 2) return null

  return (
    <div
      className="mt-4 flex justify-center gap-[5px] md:mt-6"
      role="group"
      aria-label={groupLabel}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          data-carousel-dot
          aria-label={itemLabel(i)}
          aria-current={i === index ? 'true' : undefined}
          onClick={() => onSelect(i)}
          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E3C4E] xl:h-auto xl:w-auto xl:min-h-0 xl:min-w-0`}
        >
          <span
            aria-hidden="true"
            className={`block h-[15px] w-[15px] rounded-full border-2 ${borderClass} ${
              i === index ? fillClass : 'bg-transparent'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
