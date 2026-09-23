/**
 * Shared horizontal bounds for header, main sections, and footer.
 * Padding and max width match `.site-container` in styles.css.
 */
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  const classes = ['site-container min-w-0', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
