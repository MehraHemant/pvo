import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const DEFAULT_OPTIONS = {}

/** Align the chosen slide to the viewport start when Embla has no scroll range. */
function focusSlide(container, emblaApi, index, animate) {
  if (!container || !emblaApi) return
  const snaps = emblaApi.scrollSnapList()
  let offset = snaps[index]
  if (offset == null) {
    const slide = emblaApi.slideNodes()[index]
    if (!slide) return
    offset = slide.offsetLeft - container.offsetLeft
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  container.style.transition =
    animate && !reduced ? 'transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)' : 'none'
  container.style.transform = `translate3d(${-offset}px, 0px, 0px)`
}

/**
 * Section carousels — Embla viewport + same controls
 * surface as useCarousel: dots, arrows, keyboard, wrap on prev/next.
 */
export function useEmblaSection(options = DEFAULT_OPTIONS) {
  const emblaOptions = useMemo(
    () => ({
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
      ...options
    }),
    [options]
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)
  const [index, setIndex] = useState(0)
  const [canScroll, setCanScroll] = useState(false)
  const [slideCount, setSlideCount] = useState(0)
  const manualFocus = useRef(false)

  const emblaScrollable = useCallback(() => {
    if (!emblaApi) return false
    return emblaApi.canScrollPrev() || emblaApi.canScrollNext()
  }, [emblaApi])

  const applyFocus = useCallback(
    (animate = true) => {
      if (!emblaApi || emblaScrollable()) return
      focusSlide(emblaApi.containerNode(), emblaApi, index, animate)
    },
    [emblaApi, emblaScrollable, index]
  )

  const sync = useCallback(() => {
    if (!emblaApi) return
    const count = emblaApi.slideNodes().length
    setSlideCount(count)
    const scrollable = emblaScrollable()
    setCanScroll(scrollable)
    const container = emblaApi.containerNode()
    if (scrollable) {
      if (manualFocus.current) {
        container.style.transition = ''
        container.style.transform = ''
        manualFocus.current = false
        emblaApi.reInit()
      }
      setIndex(emblaApi.selectedScrollSnap())
    } else {
      manualFocus.current = count > 1
      applyFocus(false)
    }
  }, [applyFocus, emblaApi, emblaScrollable])

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

  useEffect(() => {
    applyFocus()
  }, [applyFocus, index])

  const goTo = useCallback(
    (target) => {
      if (!emblaApi) return
      const count = emblaApi.slideNodes().length
      if (!count) return
      const next = ((target % count) + count) % count
      if (emblaScrollable()) {
        emblaApi.scrollTo(next)
      } else {
        setIndex(next)
      }
    },
    [emblaApi, emblaScrollable]
  )

  const step = useCallback(
    (delta) => {
      if (!emblaApi) return
      const count = emblaApi.slideNodes().length
      if (!count) return
      const scrollable = emblaScrollable()
      const current = scrollable ? emblaApi.selectedScrollSnap() : index
      const next = (current + delta + count) % count
      if (scrollable) {
        emblaApi.scrollTo(next)
      } else {
        setIndex(next)
      }
    },
    [emblaApi, emblaScrollable, index]
  )

  useEffect(() => {
    if (!emblaApi) return undefined
    const root = emblaApi.rootNode()
    const setDragging = (on) => {
      if (on) root.setAttribute('data-carousel-dragging', '')
      else root.removeAttribute('data-carousel-dragging')
    }
    const onPointerDown = () => setDragging(true)
    const onPointerUp = () => setDragging(false)
    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)
    return () => {
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
      setDragging(false)
    }
  }, [emblaApi])

  /** Swipe prev/next when the track is manual-translated (xl, no scroll range). */
  useEffect(() => {
    if (!emblaApi) return undefined
    const root = emblaApi.rootNode()
    const SWIPE_PX = 48
    let startX = 0
    let tracking = false

    const onPointerDown = (event) => {
      if (event.button !== 0 || emblaScrollable()) return
      startX = event.clientX
      tracking = true
      root.setAttribute('data-carousel-dragging', '')
    }

    const finish = (event) => {
      if (!tracking) return
      tracking = false
      root.removeAttribute('data-carousel-dragging')
      if (emblaScrollable()) return
      const delta = event.clientX - startX
      if (Math.abs(delta) >= SWIPE_PX) step(delta > 0 ? -1 : 1)
    }

    root.addEventListener('pointerdown', onPointerDown)
    root.addEventListener('pointerup', finish)
    root.addEventListener('pointercancel', finish)
    return () => {
      root.removeEventListener('pointerdown', onPointerDown)
      root.removeEventListener('pointerup', finish)
      root.removeEventListener('pointercancel', finish)
      root.removeAttribute('data-carousel-dragging')
    }
  }, [emblaApi, emblaScrollable, step])

  const onKeyDown = useCallback(
    (event) => {
      const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
      if (delta) {
        event.preventDefault()
        step(delta)
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault()
        const count = emblaApi?.slideNodes().length ?? 0
        if (count) goTo(event.key === 'Home' ? 0 : count - 1)
      }
    },
    [emblaApi, goTo, step]
  )

  const hasControls = slideCount > 1

  return { emblaRef, index, canScroll, hasControls, goTo, step, onKeyDown }
}
