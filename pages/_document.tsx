import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head color=''>
        <title>Hello Mine</title>
      </Head>
      <body className='bg-white text-black dark:bg-stone-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
