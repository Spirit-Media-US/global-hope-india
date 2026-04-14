export default {
  name: 'donationLink',
  title: 'Donation Links',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Partner', value: 'partner' },
          { title: 'Project', value: 'project' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'donateUrl',
      title: 'Givebutter URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  orderings: [
    {
      title: 'Category + Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category' },
    prepare(sel: any) {
      return {
        title: sel.title,
        subtitle: sel.category === 'partner' ? 'Partner' : 'Project',
      };
    },
  },
};
