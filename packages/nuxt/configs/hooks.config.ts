import type { HookResult, NuxtPage } from 'nuxt/schema'

export function pagesExtendHook(pages: NuxtPage[]): HookResult | undefined {
  const pagesToRemove: NuxtPage[] = []
  pages.forEach((page) => {
    if (page.path.includes('component'))
      pagesToRemove.push(page)
  })

  pagesToRemove.forEach((page) => {
    pages.splice(pages.indexOf(page), 1)
  })
}
