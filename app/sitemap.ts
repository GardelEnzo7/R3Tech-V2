import type { MetadataRoute } from 'next'

import { projects, services, site } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/proyectos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/nosotros`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${site.url}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/servicios/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/proyectos/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes]
}
