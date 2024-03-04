export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Page Content',
      name: 'pageContent',
      type: 'object',
      fields: [
        {
          title: 'Hero Banner',
          name: 'heroBanner',
          type: 'reference',
          to: [{ type: 'heroBanner' }],
        },
        {
          title: 'Order Info Cards',
          name: 'orderInfoCards',
          type: 'reference',
          to: [{ type: 'orderInfoCards' }],
        },
        {
          title: 'Featured Collections',
          name: 'featuredCollections',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'featuredCollection' }],
            },
          ],
        },
      ],
    },
  ],
}
