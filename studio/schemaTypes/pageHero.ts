export default {
  name: 'pageHero',
  title: 'Page Heroes',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Projects', value: 'projects' },
          { title: 'Get Involved', value: 'get-involved' },
          { title: 'Impact', value: 'impact' },
          { title: 'Blog', value: 'blog' },
        ],
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
      rows: 3,
    },
    {
      name: 'heroImageUrl',
      title: 'Hero Image URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'page' },
  },
};
