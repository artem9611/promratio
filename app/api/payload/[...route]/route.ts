import { createRestHandler } from '@payloadcms/next/routes/rest'
import config from '../../../../src/payload/payload.config'

export const runtime = 'nodejs'

export const { GET, POST, PATCH, DELETE } = createRestHandler({
  config,
})
