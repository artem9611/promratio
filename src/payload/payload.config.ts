import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const payloadSecret = process.env.PAYLOAD_SECRET

if (!payloadSecret) {
  throw new Error('PAYLOAD_SECRET is not defined in environment variables')
}

export default buildConfig({
  secret: payloadSecret,

  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
    },
  }),

  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'articles',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'group', type: 'text', required: true },
        { name: 'child', type: 'text', required: true },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
        },
      ],
    },
  ],
})
