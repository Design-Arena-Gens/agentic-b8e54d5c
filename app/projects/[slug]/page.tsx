import { notFound } from 'next/navigation'
import { allProjects, type Project } from '@/data/projects'
import { ProjectClient } from '@/components/ProjectClient'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return <ProjectClient project={project as Project} />
}
