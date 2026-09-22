/** Carousel previous/next glyph. Sized to whatever button it sits in. */
export default function Chevron({ back = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-[42%] w-[42%]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points={back ? '15 5 8 12 15 19' : '9 5 16 12 9 19'} />
    </svg>
  )
}
