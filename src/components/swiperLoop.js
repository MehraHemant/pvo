/** Shared Swiper props: reliable touch swipes + loop when all slides fit in view. */
export const SWIPER_TOUCH_LOOP = {
  loop: true,
  allowTouchMove: true,
  simulateTouch: true,
  touchEventsTarget: 'container',
  resistanceRatio: 0.85,
  watchOverflow: false,
  cssMode: false,
  grabCursor: true,
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,
}

export function bindSwiperLoopFix(swiperRef, afterInit) {
  return (instance) => {
    swiperRef.current = instance
    instance.loopFix()
    afterInit?.(instance)
  }
}

export function fixSwiperLoop(instance) {
  instance?.loopFix()
}

/** Minimum slide count so Swiper loop works at a given max slidesPerView (>2×, not ≥2×). */
export function duplicateSlidesForLoop(slides, maxSlidesPerView) {
  const minimum = maxSlidesPerView * 2 + 1
  if (slides.length >= minimum) return slides
  const copies = Math.ceil(minimum / slides.length)
  return Array.from({ length: copies }, () => slides).flat()
}

if (import.meta.env?.DEV) {
  const cases = duplicateSlidesForLoop([1, 2, 3, 4, 5, 6], 3)
  console.assert(cases.length > 6, 'CaseStudies loop: need >6 slides for 3-up at lg')
}
