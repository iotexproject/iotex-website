import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import "antd/dist/antd.css"
import { css } from "app/utils/stitches.config"
import { Header } from "app/components/Header"
import Footer from "app/components/Footer"
import { useStore } from "../stores"
import { globalStyles } from "app/utils/styles"
import HighLight from "../components/HighLight"

const ForInvestors: BlitzPage = observer(() => {
  const { lang } = useStore()

  return (
    <Layout title={"Investors"}>
      <Header />
      <div className={`${styles.index} ${globalStyles.container}`}>
        <div className={styles.banner}>
          <div className="main-container">
            <div className="left-box">
              <div className="title">{lang.t("investors.banner.title")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.banner.tips")}
                keyArr={[
                  {
                    word: lang.t("investors.banner.tips.keyword2"),
                    link: "https://iopay.iotex.io/",
                  },
                ]}
                markActiveStyle={{ color: "#43C9BA", fontWeight: 600 }}
              />
              <a className="action-stake" href="https://member.iotex.io/">
                {lang.t("stake_now")}
              </a>
              <a className="action-download" href="https://iopay-wallet.iotex.io/">
                → {lang.t("download_iopay")}
              </a>
            </div>
            <div className="right-box">
              <img src="/images/mainnet.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title1")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips1")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips1.keyword"),
                    link: "https://ecosystem.iotex.io/exchanges-walelts",
                  },
                ]}
                markActiveStyle={{ color: "#43C9BA" }}
              />
            </div>
            <div className="right-box illustration">
              <img src="/images/screen-shot.png" alt="" />
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title2")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips2")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips2.keyword"),
                    link: "https://iopay.iotex.io/",
                  },
                ]}
                markActiveStyle={{ color: "#43C9BA" }}
              />
              <div className="download-box">
                <a href="https://play.google.com/store/apps/details?id=io.iotex.iopay.gp">
                  <img src="/images/playstore.png" alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=io.iotex.iopay.gp">
                  <img src="/images/ios-download.png" alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=io.iotex.iopay.gp">
                  <img src="/images/appstore.png" alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=io.iotex.iopay.gp">
                  <img src="/images/btn_mirror1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="right-box illustration">
              <img src="/images/iopay.png" alt="" />
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title3")}</div>
              <div className="tips">{lang.t("investors.article.tips3")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips4")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips4.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips5")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips5.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
            </div>
            <div className="right-box illustration">
              <img src="/images/iopay-login.png" alt="" />
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title4")}</div>
              <div className="tips">{lang.t("investors.article.tips6")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips7")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips7.keyword1"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips8")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips8.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
            </div>
            <div className="right-box illustration">
              <img src="/images/vote.png" alt="" />
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title5")}</div>
              <div className="tips">{lang.t("investors.article.tips9")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips10")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips10.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips11")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips11.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips12")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips12.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips13")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips13.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips14")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips14.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips15")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips15.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
            </div>
            <div className="right-box illustration">
              <img src="/images/stake.png" alt="" />
            </div>
          </div>
          <div className={`${styles.article} main-container`}>
            <div className="left-box text">
              <div className="title">{lang.t("investors.article.title6")}</div>
              <div className="tips">{lang.t("investors.article.tips16")}</div>
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips17")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips17.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips18")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips18.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
              <HighLight
                className="tips"
                sourceStr={lang.t("investors.article.tips19")}
                keyArr={[
                  {
                    word: lang.t("investors.article.tips19.keyword"),
                  },
                ]}
                markActiveStyle={{ fontWeight: 600 }}
              />
            </div>
            <div className="right-box illustration">
              <img src="/images/sign.png" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
})

export default ForInvestors

const styles = {
  index: css({
    background: "$bg",
    height: "100vh",
    fontIbm: 300,

    mdMax: {
      ".main-container": {
        display: "block",
      },

      ".left-box, .right-box": {
        width: "100%",
      },

      ".right-box": {
        textAlign: "initial",
      },
    },

    ".main-container": {
      width: "80%",
      maxWidth: "$mainW",
      margin: "0 auto",
      flexBetweenCenter: "row",
    },

    ".left-box, .right-box": {
      width: "47%",
    },

    ".right-box": {
      textAlign: "right",
    },
  }),
  banner: css({
    width: "100%",
    background: "$bg2",
    color: "white",
    padding: "60px 0",
    mb: 100,

    mdMax: {
      padding: "50px 0",
      mb: 0,

      ".main-container": {
        padding: "30px 0",
      },

      ".title": {
        fontSize: 48,
      },

      ".tips": {
        mt: 30,
      },

      ".action-stake": {
        mt: 30,
      },

      ".action-download": {
        fontSize: 16,
        mt: 30,
      },

      img: {
        maxHeight: 300,
        mt: 50,
      },
    },

    ".main-container": {
      alignItems: "flex-start !important",
    },

    ".title": {
      fontSize: 60,
      lineHeight: "64px",
    },

    ".tips": {
      fontSize: 16,
      mt: 40,
    },

    ".action-stake": {
      display: "inline-block",
      fontSize: 20,
      color: "$green600",
      padding: "6px 18px",
      border: "1px solid $green600",
      br: 4,
      mt: 50,
    },

    ".action-download": {
      display: "block",
      fontSize: 18,
      mt: 50,
      fontIbm: 500,
    },

    a: {
      color: "white",
      textDecoration: "none",
    },

    img: {
      maxWidth: "100%",
      maxHeight: 500,
      objectFit: "contain",
    },
  }),
  articleContainer: css({
    mdMax: {
      padding: "40px 0 30px",
    },
  }),
  article: css({
    alignItems: "flex-start !important",
    padding: "30px 0 80px",

    mdMax: {
      padding: "40px 0 80px",

      ".illustration": {
        mt: 30,
      },
    },

    ".text": {
      color: "$gray600",

      ".title": {
        fontSize: 32,
      },

      ".tips": {
        fontSize: 16,
        my: 16,
      },

      ".emphasize": {
        fontIbm: 700,
      },

      ".link": {
        color: "$green600",
      },

      ".download-box": {
        mt: 20,

        a: {
          display: "inline-block",
          mr: 10,
          mb: 10,

          img: {
            height: 38,
          },
        },
      },
    },

    ".illustration": {
      img: {
        width: "100%",
      },
    },
  }),
}
