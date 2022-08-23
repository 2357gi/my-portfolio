import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const title = 'portfolio | 2357gi'
  const description = '2357gi(大木建人)のポートフォリオページ。'
  const imgUrl = 'https://2357gi.com/ogp.png'
  const imgWidth = 1280
  const imgHeight = 640
  return (
    <Html>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:url" content={imgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:width" content={String(imgWidth)} />
        <meta property="og:image:height" content={String(imgHeight)} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
