import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * The slides of a track, ignoring anything else in it — a row that has to let
 * its last slide reach the left edge carries a trailing spacer.
 */
function slidesOf(el) {
  const marked = el.querySelectorAll('[data-carousel-slide]')
  return Array.from(marked.length ? marked : el.children)
}

/**
 * State for a carousel that scrolls natively.
 *
 * Nothing here moves anything: CSS `overflow-x` + `scroll-snap` do the
 * scrolling, swiping and trackpad drag, and this only reads the resting
 * position back out so the dots can follow it. The element `scrollerRef` is
 * attached to must be the flex track itself, so its children are the slides.
 *
 * @param {number} count number of slides
 */
export function useCarousel(count) {
  const scrollerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [canScroll, setCanScroll] = useState(false)
  // Where we are, or are heading, without waiting for a re-render.
  const current = useRef(0)
  // Destination of a smooth scroll that is still running. While it is set the
  // dots show where we are going rather than every slide we pass on the way.
  const pending = useRef(-1)
  const timer = useRef(0)

  const sync = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return

    const scrollable = el.scrollWidth - el.clientWidth > 1
    setCanScroll(scrollable)
    if (pending.current >= 0) return

    if (!scrollable) {
      return
    }

    // The current slide is the first one sitting wholly inside the visible
    // strip. Measuring from the left edge alone would lie at the end of the
    // track, where the last slide can never be scrolled flush.
    const box = el.getBoundingClientRect()
    let whole = -1
    let nearest = 0
    let closest = Infinity
    slidesOf(el).forEach((slide, i) => {
      const rect = slide.getBoundingClientRect()
      if (whole < 0 && rect.left >= box.left - 1 && rect.right <= box.right + 1) whole = i
      const distance = Math.abs(rect.left - box.left)
      if (distance < closest) {
        closest = distance
        nearest = i
      }
    })

    current.current = whole < 0 ? nearest : whole
    setIndex(current.current)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined

    let frame = 0
    const schedule = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(sync)
    }

    schedule()
    el.addEventListener('scroll', schedule, { passive: true })
    el.addEventListener('scrollend', schedule)
    const observer = new ResizeObserver(schedule)
    observer.observe(el)
    // A track that becomes `display: contents` at a breakpoint stops being
    // observable, so watch the viewport too.
    window.addEventListener('resize', schedule)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer.current)
      el.removeEventListener('scroll', schedule)
      el.removeEventListener('scrollend', schedule)
      window.removeEventListener('resize', schedule)
      observer.disconnect()
    }
  }, [count, sync])

  const goTo = useCallback(
    (target) => {
      const el = scrollerRef.current
      if (!el) return

      const next = ((target % count) + count) % count
      const slide = slidesOf(el)[next]
      if (!slide) return

      current.current = next
      setIndex(next)

      const scrollable = el.scrollWidth - el.clientWidth > 1
      if (!scrollable) return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollTo({
        left: el.scrollLeft + slide.getBoundingClientRect().left - el.getBoundingClientRect().left,
        behavior: reduced ? 'auto' : 'smooth'
      })

      pending.current = next
      window.clearTimeout(timer.current)
      const done = () => {
        pending.current = -1
        sync()
      }
      if ('onscrollend' in el) {
        el.addEventListener('scrollend', done, { once: true })
      } else {
        timer.current = window.setTimeout(done, 700)
      }
    },
    [count, sync]
  )

  /** Wraps, so the prev/next buttons never dead-end. */
  const step = useCallback(
    (delta) => goTo((current.current + delta + count) % count),
    [count, goTo]
  )

  const onKeyDown = useCallback(
    (event) => {
      const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
      if (delta) {
        event.preventDefault()
        step(delta)
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault()
        goTo(event.key === 'Home' ? 0 : count - 1)
      }
    },
    [count, goTo, step]
  )

  return { scrollerRef, index, canScroll, goTo, step, onKeyDown }
}
