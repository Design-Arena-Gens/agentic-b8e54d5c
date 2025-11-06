import Link from 'next/link'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card overflow-hidden">
      <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Using SVG placeholders to keep repo light */}
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.category}</p>
          </div>
          <span className="text-accent transition group-hover:translate-x-1" aria-hidden>?</span>
        </div>
      </Link>
    </article>
  )
}
