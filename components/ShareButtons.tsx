import { usePathname } from 'next/navigation'

export function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname()
  const url = `https://agentic-b8e54d5c.vercel.app${pathname}`
  const text = encodeURIComponent(title)
  const shareUrl = encodeURIComponent(url)

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-gray-600">Share:</span>
      <a aria-label="Share on X" className="underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`}>X</a>
      <a aria-label="Share on Facebook" className="underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>Facebook</a>
      <a aria-label="Share on LinkedIn" className="underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}>LinkedIn</a>
    </div>
  )
}
