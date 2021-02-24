import { Head, BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { Header } from "../../components/Header"
import { globalStyles } from "app/utils/styles"
import { css } from "../../utils/stitches.config"

const Enterprise: BlitzPage = observer(() => {
  const { lang } = useStore()
  return (
    <>
      <Head>
        <title>{lang.t("enterprise.title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={globalStyles.container}>
        {/* banner */}
        <article className={styles.enterpriseBanner}>
          <img src="images/enterprise-banner.png" alt="" />
        </article>
      </div>
    </>
  )
})

const styles = {
  enterpriseBanner: css({
    height: "28rem",
  }),
}

export default Enterprise
