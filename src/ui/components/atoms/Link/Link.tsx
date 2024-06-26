import React from 'react'
import NextLink from 'next/link'

export interface LinkProps {
  href: string
  external?: boolean
  children?: React.ReactNode
}

const Link: React.FC<LinkProps> = ({
  href, //
  external = false,
  children = '',
}) =>
  external ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <NextLink href={href}>{children}</NextLink>
  )

export default Link
