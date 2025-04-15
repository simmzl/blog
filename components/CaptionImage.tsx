import Image, { ImageProps } from 'next/image'
import { cn } from '../lib/utils'

interface CaptionImageProps extends Omit<ImageProps, 'alt'> {
  alt: string
  caption?: string // 可选的额外说明，如果不提供则使用 alt
  captionClassName?: string // 为说明文字添加自定义样式
  containerClassName?: string // 为容器添加自定义样式
}

/**
 * 带说明文字的图片组件
 *
 * 宽度会自动撑满父容器，高度自适应
 * 会自动将 alt 文本或自定义 caption 显示在图片下方
 */
export default function CaptionImage({
  alt,
  caption,
  captionClassName,
  containerClassName,
  className,
  ...props
}: CaptionImageProps) {
  // 说明文字，优先使用 caption，如果没有则使用 alt
  const captionText = caption || alt

  return (
    <figure className={cn('my-6 w-full', containerClassName)}>
      <Image
        alt={alt}
        className={cn('h-auto w-full', className)}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={1920}
        height={1080}
        {...props}
      />
      {captionText && (
        <figcaption className={cn('mt-2 text-center text-sm text-gray-500', captionClassName)}>
          {captionText}
        </figcaption>
      )}
    </figure>
  )
}
