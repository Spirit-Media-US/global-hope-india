export default {
  name: 'faqItem',
  title: 'FAQ Items',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'About', value: 'about' },
          { title: 'Projects', value: 'projects' },
          { title: 'Get Involved', value: 'get-involved' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'question' },
  },
};
