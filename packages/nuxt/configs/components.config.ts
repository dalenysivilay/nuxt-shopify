export const components = {
  dirs: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/pages',
      pattern: '*/components/**',
      pathPrefix: false,
    },
  ],
}

export default components
