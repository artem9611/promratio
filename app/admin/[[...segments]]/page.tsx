import config from '../../../src/payload/payload.config'
import { RootPage } from '@payloadcms/next/views'

export const dynamic = 'force-dynamic'

type Props = {
  params: {
    segments?: string[]
  }
  searchParams?: Record<string, string | string[]>
}

export default async function AdminPage({ params, searchParams }: Props) {
  return (
    <RootPage
      config={config}
      params={Promise.resolve({
        segments: params.segments ?? [],
      })}
      searchParams={Promise.resolve(searchParams ?? {})}
      importMap={{}}
    />
  )
}

