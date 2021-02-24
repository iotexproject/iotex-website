import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import "antd/dist/antd.css"
import { globalStyles } from "app/utils/styles"
import { css } from "app/utils/stitches.config"
import Footer from "app/components/footer"

const Investors: BlitzPage = observer(() => {
  return (
    <Layout title={"Investors"}>
      <div className={`${styles.index}`}>
        <div className={styles.header}>
          <div className="mian-container">
            <div className="left w-half">
              <div className="title">
                Stake on IoTeX Mainnet GA
              </div>
              <div>
                With the major release of Mainnet GA “Machina”, IoTeX has officially established independence from Ethereum
                and is now a fully native blockchain. From now on, voters will use native IOTX and ioPay to stake and vote
                on the IoTeX network.
              </div>
              <div>
                Stake now
              </div>
              <div>
                Download ioPay
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
})

export default Investors

const styles = {
  index: css({
    background: "$bg",
    height: "100vh",

    ".w-half": {
      width: "50%"
    },

    ".mian-container": {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }),
  header: css({
    width: "100%",
    height: 500,
    background: "$bg2",
    color: "white",
    flexLeftCenter: "row",
    padding: "0 80px",

    ".left": {
    }

  }),


}
