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
  const author3 = allAuthors.find((p) => p.slug === 'frida') as Authors
  const author4 = allAuthors.find((p) => p.slug === 'hc') as Authors
  const author5 = allAuthors.find((p) => p.slug === 'hassan') as Authors
  const mainContent1 = coreContent(author1)
  const mainContent2 = coreContent(author2)
  const mainContent3 = coreContent(author3)
  const mainContent4 = coreContent(author4)
  const mainContent5 = coreContent(author5)

  return (
    <>
      <AuthorLayout content={mainContent1}>
        <MDXLayoutRenderer code={author1.body.code} />
      </AuthorLayout>

      <AuthorLayoutSub content={mainContent2}>
        <MDXLayoutRenderer code={author2.body.code} />
      </AuthorLayoutSub>

      <AuthorLayoutSub content={mainContent3}>
        <MDXLayoutRenderer code={author3.body.code} />
      </AuthorLayoutSub>

      <AuthorLayoutSub content={mainContent4}>
        <MDXLayoutRenderer code={author4.body.code} />
      </AuthorLayoutSub>

      <AuthorLayoutSub content={mainContent5}>
        <MDXLayoutRenderer code={author5.body.code} />
      </AuthorLayoutSub>
    </>
  )
}
