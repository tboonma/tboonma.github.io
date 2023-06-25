interface ImgWithFallbackProps {
  src: string
  fallback: string
  alt: string
  type?: string
}

const ImgWithFallback = ({
  src,
  fallback,
  alt,
  type = 'image/webp',
  ...delegated
}: ImgWithFallbackProps) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
