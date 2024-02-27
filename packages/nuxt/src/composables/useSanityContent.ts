interface ContentFetcherOptions<T> {
  id?: string
  query: string
  defaultContent?: T
}

export default function useContentFetcher<T>({ id, query, defaultContent }: ContentFetcherOptions<T>): Ref<T | undefined> {
  const content = ref<T>()

  if (id) {
    try {
      const { data } = useSanityQuery<T>(query)
      if (data.value)
        content.value = data.value
    }
    catch (error) {
      logError(error as Error, `Failed to fetch Sanity content for id: ${id}`)
    }
  }
  else {
    content.value = defaultContent
  }

  return content
}
