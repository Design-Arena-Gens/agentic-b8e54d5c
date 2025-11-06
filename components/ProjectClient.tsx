"use client";
import type { Project } from '@/data/projects'
import { useState } from 'react'
import { ShareButtons } from '@/components/ShareButtons'
import { GalleryLightbox } from '@/components/GalleryLightbox'

export function ProjectClient({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<null | number>(null)

  return (
    <div className="container-page">
      <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
          <p className="text-gray-600">{project.category}</p>
        </div>
        <ShareButtons title={project.title} />
      </header>

      <p className="mb-8 max-w-prose text-gray-700">{project.description}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((img, i) => (
          <button
            key={img.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            onClick={() => setLightbox(i)}
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            <span className="pointer-events-none absolute inset-0 ring-0 transition group-hover:ring-4 group-hover:ring-accent/20" aria-hidden />
          </button>
        ))}
      </div>

      {project.testimonial && (
        <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <blockquote className="text-lg font-medium leading-relaxed">?{project.testimonial.quote}?</blockquote>
          <p className="mt-2 text-sm text-gray-600">? {project.testimonial.client}</p>
        </section>
      )}

      {lightbox !== null && (
        <GalleryLightbox images={project.images} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
