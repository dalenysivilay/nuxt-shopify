export default {
  name: 'featuredCollection',
  title: 'Featured Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'collectionHandle',
      title: 'Collection Handle',
      type: 'string',
    },
    {
      name: 'showNumberOfProducts',
      title: 'Show Number of Products',
      type: 'number',
    },
  ],
}
