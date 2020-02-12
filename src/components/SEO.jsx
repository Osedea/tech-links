import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default ({
  title = null,
  description = null,
  card = null,
  lang = null,
  path = null
}) => {
  const {
    site: { siteMetadata: site }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            language
          }
        }
      }
    `
  )

  const browserTitle = title ? `${title} | ${site.title}` : site.title
  const pageLang = lang || site.language
  const pageTitle = title || site.title
  const pageDescription = description || site.description
  const pageImage = card || '/card.png'
  const pageUrl = path ? site.siteUrl + path : null

  return (
    <>
      <Helmet>
        <html lang={pageLang} />
        <title>{browserTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="home" href={site.siteUrl} />
      </Helmet>

      {pageUrl && (
        <Helmet>
          <link rel="canonical" href={pageUrl} />

          {/* Open graph */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:image:secure_url" content={pageImage} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={pageTitle} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:creator" content={site.author} />
          <meta name="twitter:url" content={pageUrl} />
        </Helmet>
      )}
    </>
  )
}
