import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {baseStructure} from './structures/base'

export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: 'm0m2ev5u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: baseStructure
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
