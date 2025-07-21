import { pick } from "lodash"
import { notFound } from "next/navigation"

  const slug = slugArray.join("/")

  const {
     || getLayoutFromSlug(slug)
  const Layout = layoutMapping[layout]

  // If the page has a published date, format it
  if ("published" in frontmatter) {
    frontmatter.published = dateToString(frontmatter.published)
  }

  // Get i18n messages
  const allMessages = await getMessages({ locale })
  const requiredNamespaces = getRequiredNamespacesForPage(slug, layout)
  const messages = pick(allMessages, requiredNamespaces)

  return (
    <I18nProvider locale={locale} messages={messages}>
      <Layout
        slug={slug}
        frontmatter={frontmatter}
        tocItems={tocItems}
        lastEditLocaleTimestamp={lastEditLocaleTimestamp}
        contentNotTranslated={!isTranslated}
        contributors={contributors}
        timeToRead={Math.round(timeToRead.minutes)}
      >
        {content}
      </Layout>
    </I18nProvider>
  )
}

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs("/")

    return LOCALES_CODES.flatMap((locale) =>
      slugs.map((slug) => ({
        slug: slug.split("/").slice(1),
        locale,
      }))
    )
  } catch (error) {
    // If content directory doesn't exist (e.g., in Netlify serverless environment),
    // return empty array to allow ISR to handle all routes dynamically
    console.warn(
      "Content directory not found, enabling full dynamic routing:",
      error
    )
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<SlugPageParams>
}) {
  const { locale, slug } = await params

  try {
    return await getMdMetadata({
      locale,
      slug,
    })
  } catch (error) {
    const t = await getTranslations({ locale, namespace: "common" })

    // Return basic metadata for invalid paths
    return {
      title: t("page-not-found"),
      description: t("page-not-found-description"),
    }
  }
}
