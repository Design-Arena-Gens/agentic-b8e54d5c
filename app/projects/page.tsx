"use client";
import { useMemo, useState } from 'react'
import { allProjects, categories, type Category } from '@/data/projects'
import { Filters } from '@/components/Filters'
import { ProjectCard } from '@/components/ProjectCard'

export default function ProjectsPage() {
  const [active, setActive] = useState<Category | 'All'>('All')
  const filtered = useMemo(() => {
    if (active === 'All') return allProjects
    return allProjects.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="container-page">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-1 text-gray-600">Filter by category to explore the work.</p>
        </div>
      </header>

      <div className="mb-8">
        <Filters categories={categories} active={active} onChange={setActive} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
