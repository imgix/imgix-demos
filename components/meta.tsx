import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A Website to Display imgix Demos.`}
      />
      <meta property="og:image" content="https://assets.imgix.net/og/mountains.jpg?auto=format&markpad=0&blend64=MzM1YjgxOWQ&bm=screen&txtalign=center&txtpad=80&txtfit=max&txtsize=36&txtclr=fff&txtfont64=QXZlbmlyIE5leHQgRGVtaSwgQm9sZA&q=99&markalign=middle%2C%20center&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj9peGxpYj1yYi0xLjEuMCZ3PTY0MCZmbT1wbmcmcGFnZT00&w=1200&fit=crop&h=630&txt64=VGhlIGVuZC10by1lbmQgcGxhdGZvcm0gZm9yIHZpc3VhbCBtZWRpYSBwcm9jZXNzaW5n" />
    </Head>
  )
}


export default Meta;