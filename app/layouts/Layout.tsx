import { Head } from "blitz"

const Layout = ({ children, title = "blitzjs" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{children}</main>
    </div>
  )
}

export default Layout
