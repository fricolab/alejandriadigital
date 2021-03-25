export default {
  name: 'topic',
  type: 'document',
  title: 'Topic',
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText'
    }
  ]
}
