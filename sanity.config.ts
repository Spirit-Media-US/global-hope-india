import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './studio/schemaTypes'

export default defineConfig({
  name: 'global-hope-india',
  title: 'Global Hope India',
  projectId: 'r33r2z1j',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
