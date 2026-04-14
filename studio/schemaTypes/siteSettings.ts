export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'string',
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
    },
    {
      name: 'empoweringText',
      title: 'Empowering Text',
      type: 'text',
      rows: 6,
    },
    {
      name: 'founderStoryPart1',
      title: 'Founder Story Part 1',
      type: 'text',
      rows: 6,
      description: 'First part of How GHI Began',
    },
    {
      name: 'founderStoryPart2',
      title: 'Founder Story Part 2',
      type: 'text',
      rows: 6,
      description: 'Second part of How GHI Began',
    },
    {
      name: 'founderStoryPart3',
      title: 'Founder Story Part 3',
      type: 'text',
      rows: 6,
      description: 'Third paragraph - October 2010 story',
    },
    {
      name: 'founderStoryPart4',
      title: 'Founder Story Part 4',
      type: 'text',
      rows: 4,
      description: 'Fourth paragraph - Today thousands...',
    },
    {
      name: 'radicalHeading',
      title: 'Radical Heading',
      type: 'string',
    },
    {
      name: 'radicalParagraph1',
      title: 'Radical Paragraph 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'radicalParagraph2',
      title: 'Radical Paragraph 2',
      type: 'text',
      rows: 6,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
};
