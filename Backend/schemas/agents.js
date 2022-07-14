export default {
    name: 'agent',
    title: 'Agent',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        
      }, 
      {
        name: 'image',
        title: 'image',
        type: 'image',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image',
        },
    },
}
  