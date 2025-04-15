import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 className，用于组合 Tailwind CSS 类名
 * 包含 clsx 的功能并使用 tailwind-merge 来正确合并 Tailwind 类
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
