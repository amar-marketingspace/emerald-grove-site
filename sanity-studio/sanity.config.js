import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import galleryImage from './schemaTypes/galleryImage'

export default defineConfig({
  name: 'default',
  title: 'Emerald Grove Studio',
  projectId: '3ssnn7z8',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [galleryImage],
  },
})