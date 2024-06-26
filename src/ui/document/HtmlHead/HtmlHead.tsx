import React from 'react'
import Head from 'next/head'

import meta from 'data/meta.json'

export interface HtmlHeadProps {
  subtitle?: string
  description?: string
}

const HtmlHead: React.FC<HtmlHeadProps> = ({
  subtitle = meta.subtitle,
  description = meta.description,
}) => (
  <Head>
    <title>{`${meta.title} - ${subtitle}`}</title>
    <meta
      name="description"
      content={description}
    />
    <link
      rel="icon"
      href="/favicon.ico"
    />
  </Head>
)

export default HtmlHead
