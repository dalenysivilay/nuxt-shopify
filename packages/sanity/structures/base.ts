import { StructureBuilder } from "sanity/structure"

export const baseStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('page')
        ),
      S.listItem()
        .title('Components')
        .child(
          S.documentTypeList('heroBanner')
        ),
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])