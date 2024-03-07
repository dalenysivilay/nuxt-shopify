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
      name: 'showNumberOfItems',
      title: 'Show Number of Items',
      type: 'number',
    },
  ],
}
