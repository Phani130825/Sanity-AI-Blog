import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ai Blog',

  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'bmmdiwgp',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  auth: {
    redirectOnSingle: false,
    mode: 'replace',
  },
})
