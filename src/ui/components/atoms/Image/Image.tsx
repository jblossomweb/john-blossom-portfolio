import React from 'react'
import NextImage from 'next/image'

export interface ImageProps {
  alt: string
  src: string
  width: number
  height: number
  priority?: boolean
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  width,
  height,
  priority = false,
  className = '',
}) => (
  <figure className={className}>
    <NextImage
      alt={alt}
      title={alt}
      aria-label={alt}
      src={src}
      width={width}
      height={height}
      priority={priority}
    />
  </figure>
)

export default Image
