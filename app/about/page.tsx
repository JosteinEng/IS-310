import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import AuthorLayoutSub from '@/layouts/AuthorLayoutSub'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Om oss' })

export default function Page() {
  const author1 = allAuthors.find((p) => p.slug === 'jostein') as Authors
  const author2 = allAuthors.find((p) => p.slug === 'michael') as Authors
  const mainContent1 = coreContent(author1)
  const mainContent2 = coreContent(author2)

  return (
    <>
      <AuthorLayout content={mainContent1}>
        <MDXLayoutRenderer code={author1.body.code} />
      </AuthorLayout>

      <AuthorLayoutSub content={mainContent2}>
        <MDXLayoutRenderer code={author2.body.code} />
      </AuthorLayoutSub>
    </>
  )
}
