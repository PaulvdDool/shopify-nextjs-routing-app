import Link from 'next/link'

/**
 * Polaris links are now Next JS Links!
 */

const CustomLink = ({children, url, ...rest}) => {

  return (
    <Link href={url}>
      <a
        {...rest}
      >
        {children}
      </a>
    </Link>
  )

}

export default CustomLink
