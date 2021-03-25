import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['topic', 'objective', 'person', 'tool', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Tools')
        .schemaType('tool')
        .child(S.documentTypeList('tool').title('Tools')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Topics')
        .schemaType('topic')
        .child(S.documentTypeList('topic').title('Topics')),
      S.listItem()
        .title('Objectives')
        .schemaType('objective')
        .child(S.documentTypeList('objective').title('Objectives')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
