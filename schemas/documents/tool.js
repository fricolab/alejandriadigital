import {format} from 'date-fns'

export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Tool', value: 'tool'},
          {title: 'Method', value: 'method'},
          {title: 'Methodology', value: 'methodology'},
          {title: 'Process', value: 'process'},
          {title: 'Content', value: 'content'},
          {title: 'Article', value: 'article'}
        ]
      }
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText'
    },
    {
      name: 'author',
      title: 'Authors',
      type: 'array',
      of: [{type: 'projectMember'}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'reference', to: {type: 'topic'}}]
    },
    {
      name: 'objective',
      title: 'Objective',
      type: 'array',
      of: [{type: 'reference', to: {type: 'objective'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'prerequisite',
      title: 'Prerequisite',
      type: 'string'
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Video', value: 'video'},
          {title: 'Audio', value: 'audio'},
          {title: 'Internet', value: 'internet'}
        ]
      }
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Pdf', value: 'pdf'},
          {title: 'Xml', value: 'xml'},
          {title: 'Docx', value: 'docx'},
          {title: 'Ai', value: 'ai'},
          {title: 'Mov', value: 'mov'},
          {title: 'Mp4', value: 'mp4'},
          {title: 'GSheets', value: 'gsheet'},
          {title: 'Domain', value: 'domain'}
        ]
      }
    },
    {
      name: 'user',
      title: 'User',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Teacher', value: 'teacher'},
          {title: 'Student', value: 'student'},
          {title: 'Entrepreneur', value: 'entrepreneur'},
          {title: 'Corporative', value: 'corporative'},
          {title: 'Manager', value: 'manager'},
          {title: 'EXATECs', value: 'exatecs'}
        ]
      }
    },
    {
      name: 'usability',
      title: 'Usability',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
