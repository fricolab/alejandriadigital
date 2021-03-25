export default {
  widgets: [
    {
      name: 'project-info'
    }, 
    {
      name: 'project-users'
    },
    {
      name: 'document-list',
      options: {title: 'Recent content', order: '_createdAt desc', types: ['tool']},
      layout: {width: 'medium'}
    }
  ]
}
