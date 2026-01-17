<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage>
    <div class="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14 lg:py-16">
      <ContentRenderer
        v-if="page"
        :value="page"
        class="prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline"
      />
    </div>
  </UPage>
</template>
