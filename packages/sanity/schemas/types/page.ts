import { Rule } from "sanity"

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  groups: [
    { title: 'Page Content', name: 'content' },
    { title: 'Settings', name: 'settings' }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'settings',
      validation: (Rule: { required: () => Rule }) => Rule.required()
    },
    {
      title: 'Page Content',
      name: 'pageContent',
      type: 'array',
      of: [
        { type: 'reference',
          to: [{type: 'heroBanner'}],
          weak: true
        },
      ],
      group: 'content'
    },
  ],
}