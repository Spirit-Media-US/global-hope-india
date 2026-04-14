export default {
  name: 'culturePoint',
  title: 'Culture Points',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { number: 'number', title: 'title' },
    prepare(selection: any) {
      return {
        title: `${selection.number}. ${selection.title}`,
      };
    },
  },
};
