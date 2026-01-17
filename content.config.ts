import { defineContentConfig, defineCollection, property, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['cv/**'],
      },
    }),
    cv: defineCollection({
      type: 'page',
      source: 'cv/**',
      schema: z.object({
        seo: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
        }).optional(),
        landingDescription: z.string().optional(),
        contact: z.object({
          phone: z.string().optional(),
          email: z.string().optional(),
          linkedin: z.string().optional(),
          github: z.string().optional(),
        }).optional(),
        experience: z.object({
          title: z.string().optional(),
          items: z.array(z.object({
            position: z.string().optional(),
            description: z.string().optional(),
            date: z.string().optional(),
            startDate: z.string().optional(),
            endDate: z.string().optional(),
            company: z.object({
              name: z.string().optional(),
              logo: z.string().optional(),
              url: z.string().optional(),
              color: z.string().optional(),
            }).optional(),
            skills: z.array(z.object({
              title: z.string().optional(),
              icon: z.string().optional(),
            })).optional(),
          })).optional(),
        }).optional(),
        skills: z.array(z.object({
          title: z.string().optional(),
          icon: z.string().optional(),
        })).optional(),
        advancedSkills: z.array(z.object({
          title: z.string().optional(),
          icon: z.string().optional(),
        })).optional(),
        projects: z.array(z.object({
          title: z.string().optional(),
          description: property(z.string().optional()).editor({ input: 'textarea' as any }),
        })).optional(),
        hero: z.object({
          images: z.array(z.unknown()).optional(),
          links: z.array(z.unknown()).optional(),
        }).optional(),
      }),
    }),
  },
})
