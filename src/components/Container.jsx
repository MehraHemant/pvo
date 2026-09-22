export default function Container({ children, className = '', inset = 'page' }) {
  const pad =
    inset === 'tight'
      ? 'px-[clamp(1.25rem,4.43vw,85px)]'
      : inset === 'footer'
        ? 'px-[clamp(1.25rem,11.875vw,228px)]'
        : 'px-[8.33vw]'

  return (
    <div className={`mx-auto w-full ${pad} ${className}`.trim()}>
      {children}
    </div>
  )
}
