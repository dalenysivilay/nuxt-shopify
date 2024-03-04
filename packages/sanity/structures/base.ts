import type { StructureBuilder } from 'sanity/structure'
import content from '../schemas/types/content'
import pages from '../schemas/types/pages'

export function baseStructure(S: StructureBuilder) {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items(
              pages.map(page =>
                S.listItem()
                  .title(page.title)
                  .child(
                    S.documentTypeList(page.name),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items(
              content.map(model =>
                S.listItem()
                  .title(model.title)
                  .child(
                    S.documentTypeList(model.name),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
    ])
}
