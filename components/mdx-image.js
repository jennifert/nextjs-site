import Image from 'next/image'

export default function MdxImage({ src, alt = '', width, height, ...props }) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width ? Number(width) : 800}
        height={height ? Number(height) : 600}
        sizes="(max-width: 768px) 100vw, 800px"
        {...props}
      />
    </figure>
  )
}