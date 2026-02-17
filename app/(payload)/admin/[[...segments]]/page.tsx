import config from '../../../src/payload/payload.config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

export const dynamic = 'force-dynamic'

export default function AdminPage(props: any) {
  return RootPage({ ...props, config })
}

export const generateMetadata = (args: any) =>
  generatePageMetadata({ ...args, config })
