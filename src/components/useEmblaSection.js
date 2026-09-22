import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

/**
 * Section carousels (Services, Case Studies) — Embla viewport + same controls
 * surface as useCarousel: dots, arrows, keyboard, wrap on prev/next.
 */
export function useEmblaSection(options = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    ...options
  })
  const [index, setIndex] = useState(0)
  const [canScroll, setCanScroll] = useState(false)

  const sync = useCallback(() => {
    if (!emblaApi) return
    setIndex(emblaApi.selectedScrollSnap())
    setCanScroll(emblaApi.canScrollPrev() || emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return undefined
    sync()
    emblaApi.on('select', sync)
    emblaApi.on('reInit', sync)
    emblaApi.on('resize', sync)
    return () => {
      emblaApi.off('select', sync)
      emblaApi.off('reInit', sync)
      emblaApi.off('resize', sync)
    }
  }, [emblaApi, sync])

  const goTo = useCallback(
    (target) => {
      if (!emblaApi) return
      emblaApi.scrollTo(target)
      // When every slide fits (e.g. Services xl), Embla may not scroll or fire select.
      if (!emblaApi.canScrollPrev() && !emblaApi.canScrollNext()) {
        setIndex(target)
      }
    },
    [emblaApi]
  )

  const step = useCallback(
    (delta) => {
      if (!emblaApi) return
      const count = emblaApi.scrollSnapList().length
      if (!count) return
      const next = (emblaApi.selectedScrollSnap() + delta + count) % count
      emblaApi.scrollTo(next)
    },
    [emblaApi]
  )

  const onKeyDown = useCallback(
    (event) => {
      const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
      if (delta) {
        event.preventDefault()
        step(delta)
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault()
        const count = emblaApi?.scrollSnapList().length ?? 0
        if (count) goTo(event.key === 'Home' ? 0 : count - 1)
      }
    },
    [emblaApi, goTo, step]
  )

  return { emblaRef, index, canScroll, goTo, step, onKeyDown }
}
