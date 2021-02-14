import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import { useStore } from "app/stores"
import { globalStyles } from "app/utils/styles"

const Home: BlitzPage = observer(() => {
  const { lang } = useStore()
  return (
    <div className={globalStyles.container}>
      <div>{lang.t("hello", { message: "nextjs" })}</div>
    </div>
  )
})

Home.getLayout = (page) => <Layout title={"Home"}>{page}</Layout>

export default Home
