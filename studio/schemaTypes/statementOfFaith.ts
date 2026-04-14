export default {
  name: 'statementOfFaith',
  title: 'Statement of Faith',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
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
    select: { text: 'text' },
    prepare(selection: any) {
      return {
        title: (selection.text || '').substring(0, 80),
      };
    },
  },
};
