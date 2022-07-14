export default {
    name: 'property',
    title: 'property',
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
          maxLength: 104,
        },
      },
        {
        name: 'image',
        title: 'image',
        type: 'image',
      },
    ],
  
   
  }
  