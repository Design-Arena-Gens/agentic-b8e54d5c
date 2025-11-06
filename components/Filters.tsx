"use client";
import type { Category } from '@/data/projects'

export function Filters({
  categories,
  active,
  onChange,
}: {
  categories: Category[]
  active: Category | 'All'
  onChange: (cat: Category | 'All') => void
}) {
  const options: (Category | 'All')[] = ['All', ...categories]
  return (
    <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-2">
      {options.map((cat) => {
        const selected = active === cat
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={selected}
            className={`rounded-md border px-3 py-1.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${selected ? 'border-accent bg-accent text-white' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
