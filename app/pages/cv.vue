<script setup lang="ts">
const { data: cv } = await useAsyncData('cv-page', () => {
  return queryCollection('cv').path('/cv').first()
})

if (!cv.value) {
  throw createError({ statusCode: 404, statusMessage: 'CV not found', fatal: true })
}

const page = computed(() => {
  const base = cv.value
  const meta = (base?.meta as Record<string, unknown>) ?? {}

  return {
    ...(base ?? {}),
    ...meta,
    title: base?.title ?? '',
    description: base?.description ?? '',
    seo: base?.seo ?? {},
  }
})

useHead(() => {
  const seo = (page.value.seo as Record<string, string>) ?? {}
  const title = seo.title || page.value.title || 'CV'
  const description = seo.description || page.value.description || ''

  return {
    title,
    meta: [
      { name: 'description', content: description },
    ],
  }
})
</script>

<template>
  <UPage v-if="page">
    <div class="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:py-12 lg:py-16">
      <LandingHero :page />
      <LandingContacts :page />
      <LandingDescription :page />
      <LandingWorkExperience :page />
      <LandingSkills :page />
      <LandingProjects :page />
    </div>
  </UPage>
</template>
