import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import "antd/dist/antd.css"
import { css } from "app/utils/stitches.config"
import { Header } from "app/components/Header"
import Footer from "app/components/Footer"
import { useStore } from "../stores"

const Investors: BlitzPage = observer(() => {
  const { lang } = useStore()

  return (
    <Layout title={"Investors"}>
      <Header/>
      <div className={`${styles.index}`}>
        <div className={styles.banner}>
          <div className="main-container">
            <div className="left-box">
              <div className="title">
                Stake on IoTeX Mainnet GA
              </div>
              <div className="tips">
                With the major release of Mainnet GA “Machina”, IoTeX has officially established independence from
                Ethereum
                and is now a fully native blockchain. From now on, voters will use native IOTX and ioPay to stake and
                vote
                on the IoTeX network.
              </div>
              <a className="action-stake">
                Stake now
              </a>
              <a className="action-download">
                → Download ioPay
              </a>
            </div>
            <div className="right-box">
              <img src="/images/mainnet.png" alt=""/>
            </div>
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title1")}
              </div>
              <div className="tips">
                Native IOTX is supported by many exchanges with popular trading pairs such as IOTX/USDT, IOTX/BTC, etc.
                You can easily obtain IOTX from the exchanges here.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/screen-shot.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title2")}
              </div>
              <div className="tips">
                The official IoTeX wallet, ioPay, is now available for Desktop (Mac, Windows) and Mobile(iOS, Android,
                APK)! ioPay is not only a great wallet to store your native IOTX, but it also facilitates Native Staking
                on the IoTeX Mainnet.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/iopay.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title3")}
              </div>
              <div className="tips">
                Login to ioPay from the native address you wish to stake/vote from before proceeding. Create a new address
                or login to an existing wallet via ioPay:
              </div>
              <div className="tips">
                Create a new address: if you do not have a native IOTX address, create one. When prompted, record your
                address, private key, and mnemonic phrase. You may also save your credentials as a keystore.
              </div>
              <div className="tips">
                Login to existing address: if you already have a Native IOTX address, you may import it using your
                keystore file, private key, mnemonic phrase, or Ledger hardware wallet.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/iopay-login.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title4")}
              </div>
              <div className="tips">
                IoTeX stakeholders can stake/vote using either Desktop or Mobile ioPay:
              </div>
              <div className="tips">
                For Desktop users: make sure your ioPay Desktop app is open before proceeding to the voting website. Begin
                by clicking “My Votes” and then click “New Vote”.
              </div>
              <div className="tips">
                For Mobile users: the voting website is integrated into ioPay — access it via the “Discover” tab. Choose
                the “IoTeX Staking” app, click “My Votes” and authorize ioPay to login via your address. Finally, click
                “New Vote”.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/vote.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title5")}
              </div>
              <div className="tips">
                After clicking “New Vote” you can select which Delegate you wish to vote for and your voting parameters,
                which are summarized below:
              </div>
              <div className="tips">
                Delegate: select a Delegate to vote for — you may change your vote to another Delegate at any time. See
                the full list of Delegates here.
              </div>
              <div className="tips">
                Amount: the # of tokens you wish to use to vote for the selected Delegate. Note: you can add tokens to an
                existing bucket after your initial vote.
              </div>
              <div className="tips">
                Stake Duration: the amount of time you wish to stake your tokens (value between 0 and 1050 days, in
                multiples of 7). The longer you stake, the more bonus votes (and rewards) you get! You may extend your
                stake duration at any time but it cannot be decreased.
              </div>
              <div className="tips">
                New in Mainnet GA: the concept of “decay” is now
                removed. Instead of your bonus votes gradually converging to zero, your bonus votes will be retained for
                your entire stake duration and will be reduced to zero after your stake duration expires.
              </div>
              <div className="tips">
                Auto-stake: if you turn auto-stake on, your stake duration and bonus votes will be retained indefinitely
                until you turn off auto-stake. Once auto-stake is turned off, your stake duration countdown will begin —
                after your stake duration expires your bonus votes will be reduced to zero and you will be able to unstake
                your tokens. You may turn auto-stake on/off at any time.
              </div>
              <div className="tips">
                IMPORTANT: you will NOT be able to un-stake your tokens until your stake duration expires. The un-staking
                process lasts 3 days, after which you may withdraw your tokens to your wallet. If you want to be able to
                un-stake your tokens at any time, select a 0 day stake duration.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/stake.png" alt=""/>
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">
                {lang.t("investors.article.title6")}
              </div>
              <div className="tips">
                After selecting your Delegate and voting parameters, click “Proceed to Vote” and confirm the
                staking/voting transaction.
              </div>
              <div className="tips">
                For Desktop users: confirm the transaction details on the voting website. Then in the ioPay Desktop app,
                sign the transaction. You will see a confirmation screen in ioPay with your transaction hash.
              </div>
              <div className="tips">
                For Mobile users: confirm the transaction details and sign the transaction. You will see a confirmation
                screen with your transaction hash.
              </div>
              <div className="tips">
                Congratulations, you staked/voted with Native IOTX via ioPay! For questions on native staking, please
                contact an Admin in the IoTeX Telegram Group.
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/sign.png" alt=""/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Layout>
  )
})

export default Investors

const styles = {
  index: css({
    background: "$bg",
    height: "100vh",
    fontIbm: 300,

    sm: {
      ".main-container": {
        display: "block"
      },

      ".left-box, .right-box": {
        width: "100%"
      },

      ".right-box": {
        textAlign: "initial"
      }
    },

    ".main-container": {
      width: "80%",
      maxWidth: "$mainW",
      margin: "0 auto",
      flexBetweenCenter: "row"
    },

    ".left-box, .right-box": {
      width: "47%"
    },

    ".right-box": {
      textAlign: "right"
    }

  }),
  banner: css({
    width: "100%",
    background: "$bg2",
    color: "white",
    padding: "60px 0",
    mb: 100,

    sm: {
      padding: "50px 0",
      mb: 0,

      ".main-container": {
        padding: "30px 0"
      },

      ".title": {
        fontSize: 48
      },

      ".tips": {
        mt: 30
      },

      ".action-stake": {
        mt: 30
      },

      ".action-download": {
        fontSize: 16,
        mt: 30
      },

      img: {
        maxHeight: 300,
        mt: 50
      }
    },


    ".main-container": {
      alignItems: "flex-start !important",
    },

    ".title": {
      fontSize: 60
    },

    ".tips": {
      fontSize: 16,
      mt: 40
    },

    ".action-stake": {
      display: "inline-block",
      fontSize: 20,
      color: "$green600",
      padding: "6px 18px",
      border: "1px solid $green600",
      br: 4,
      mt: 50
    },

    ".action-download": {
      display: "block",
      fontSize: 18,
      mt: 50,
      fontIbm: 500
    },

    a: {
      color: "white",
      textDecoration: "none"
    },

    img: {
      maxWidth: "100%",
      maxHeight: 500,
      objectFit: "contain"
    }

  }),
  articleContainer: css({
    sm: {
      padding: "40px 0 30px"
    }
  }),
  article: css({
    alignItems: "flex-start !important",
    padding: "30px 0 80px",

    sm: {
      padding: "40px 0 80px",

      ".illustration": {
        mt: 30
      }
    },

    ".text": {
      color: "$gray600",

      ".title": {
        fontSize: 32,
      },

      ".tips": {
        fontSize: 16,
        my: 16
      },

      ".emphasize": {
        fontIbm: 700
      },

      ".link": {
        color: "$green600"
      }

    },


    ".illustration": {
      img: {
        width: "100%"
      }
    }
  })

}
