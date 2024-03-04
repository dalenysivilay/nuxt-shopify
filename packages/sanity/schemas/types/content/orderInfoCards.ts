export default {
  name: 'orderInfoCards',
  title: 'Order Info Cards',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'leftCard',
      title: 'Left Card',
      type: 'object',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'centerCard',
      title: 'Center Card',
      type: 'object',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'rightCard',
      title: 'Right Card',
      type: 'object',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
  ],
}
