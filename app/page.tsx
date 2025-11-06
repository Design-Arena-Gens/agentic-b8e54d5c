import Link from 'next/link'
import { allProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export default function HomePage() {
  const featured = allProjects.slice(0, 6)
  return (
    <div className="container-page">
      <section className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Visual Portfolio</h1>
          <p className="mt-2 max-w-prose text-gray-600">Clean, modern, and responsive portfolio to showcase photography, design, and illustration work.</p>
        </div>
        <Link href="/projects" className="btn-primary">View all projects</Link>
      </section>
      <section>
        <h2 className="sr-only">Featured projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
