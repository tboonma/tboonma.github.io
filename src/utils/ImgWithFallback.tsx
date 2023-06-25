interface ImgWithFallbackProps {
  src: string
  fallback: string
  type?: string
}

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}: ImgWithFallbackProps) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  )
}

export default ImgWithFallback
