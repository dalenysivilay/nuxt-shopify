export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImageUrl',
      title: 'Background Image URL',
      type: 'url',
    },
    {
      name: 'productImageUrl',
      title: 'Product Image URL',
      type: 'url',
    },
    {
      name: 'productImageAlt',
      title: 'Product Image Alt Text',
      type: 'string',
    },
  ],
}
