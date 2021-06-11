import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import "antd/dist/antd.css"
import { css } from "app/utils/stitches.config"
import { Header } from "app/components/Header"
import Footer from "app/components/Footer"
import HighLight from "app/components/HighLight"
import { useStore } from "../stores"
import { globalStyles } from "app/utils/styles"
import { white } from "colorette"

const Research: BlitzPage = observer(() => {
  const { lang } = useStore()

  return (
    <Layout title={"Research"}>
      <div className={globalStyles.container}>
        <Header />
        <div className={`${styles.banner}`}>
          <div className={`${styles.mainContainer} banner-wrapper`}>
            <div className="left">
              <div className="title">{lang.t("research.banner.title")}</div>
              <div className="caption">{lang.t("research.banner.caption1")}</div>
            </div>
            <div className="right">
              <img src="/images/research-banner.png" alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.mainContainer} ${styles.contentBox}`}>
          <div className={styles.contentBlock}>
            <img className="img-left" src="/images/research-block1.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block1.title")}</div>
              <div className="caption">{lang.t("research.block1.caption1")}</div>
              <div className="action-box">
                <a className="btn" href="https://iotex.io/white-paper" target="_blank">
                  {lang.t("research.read_now")}
                </a>
                <div className="link-box">
                  <a
                    className="link"
                    href="https://files.iotex.io/publications/IoTeX_Whitepaper_1.4_ZH_CN.pdf"
                    target="_blank"
                  >
                    ZH
                  </a>
                  <a
                    className="link"
                    href="https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_RU.pdf"
                    target="_blank"
                  >
                    RU
                  </a>
                  <a
                    className="link"
                    href="https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_KO.pdf"
                    target="_blank"
                  >
                    KO
                  </a>
                  <a
                    className="link"
                    href="https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_IT.pdf"
                    target="_blank"
                  >
                    IT
                  </a>
                  <a
                    className="link"
                    href="https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_PT-BR.pdf"
                    target="_blank"
                  >
                    PT
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <img className="img-top" src="/images/research-block2.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block2.title")}</div>
              <div className="caption">{lang.t("research.block2.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://files.iotex.io/publications/Academic_Paper_Yellow_Paper.pdf"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
            <img className="img-right" src="/images/research-block2.png" alt="" />
          </div>
          <div className={styles.contentBlock}>
            <img className="img-left" src="/images/research-block3.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block3.title")}</div>
              <div className="caption">{lang.t("research.block3.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://files.iotex.io/publications/PBFT.pdf"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <img className="img-top" src="/images/research-block4.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block4.title")}</div>
              <div className="caption">{lang.t("research.block4.caption1")}</div>
              <div className="caption" style={{ marginTop: "1rem" }}>
                {lang.t("research.block4.caption2")}
              </div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://files.iotex.io/publications/IoTeX_DKSAP_IOT_EN.pdf"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
            <img className="img-right" src="/images/research-block4.png" alt="" />
          </div>
          <div className={styles.contentBlock}>
            <img className="img-left" src="/images/research-block5.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block5.title")}</div>
              <div className="caption">{lang.t("research.block5.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://ieeexplore.ieee.org/document/8977444"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <img className="img-top" src="/images/research-block6.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block6.title")}</div>
              <div className="caption">{lang.t("research.block6.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://ieeexplore.ieee.org/document/8977822"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
            <img className="img-right" src="/images/research-block6.png" alt="" />
          </div>
          <div className={styles.contentBlock}>
            <img className="img-left" src="/images/research-block7.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block7.title")}</div>
              <div className="caption">{lang.t("research.block7.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://ieeexplore.ieee.org/document/9221130"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <img className="img-top" src="/images/research-block8.png" alt="" />
            <div className="caption-box">
              <div className="title">{lang.t("research.block8.title")}</div>
              <div className="caption">{lang.t("research.block8.caption1")}</div>
              <div className="action-box">
                <a
                  className="btn"
                  href="https://files.iotex.io/publications/ucam-whitepaper.pdf"
                  target="_blank"
                >
                  {lang.t("research.read_now")}
                </a>
              </div>
            </div>
            <img className="img-right" src="/images/research-block8.png" alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
})

export default Research

const styles = {
  mainContainer: css({
    position: "relative",
    width: "80%",
    maxWidth: "$mainW",
    margin: "0 auto",
  }),
  banner: css({
    background: "$bg3",
    py: "3.75rem",

    mdMax: {
      ".banner-wrapper": {
        display: "block",

        ".left": {
          width: "80%",
          pb: "1.875rem",
        },

        ".right": {
          width: "100%",
        },
      },
    },

    ".banner-wrapper": {
      pb: "1.875rem",
      flexBetweenTop: "row",
      color: "white",

      ".left": {
        width: "40%",
        margin: "5rem 0 3.125rem",

        ".title": {
          fontHeebo: 200,
          fontSize: "2.75rem",
          pb: "0.625rem",
        },

        ".caption": {
          width: "",
          fontHeebo: 200,
          fontSize: "0.875rem",
        },
      },

      ".right": {
        width: "50%",
        img: {
          width: "100%",
        },
      },
    },
  }),
  contentWrapper: css({
    background: "$bg3",
  }),
  contentBox: css({
    maxWidth: "1100px !important",
    py: "6.25rem",
  }),
  contentBlock: css({
    background: "$bg4",
    padding: "1.875rem 3.125rem",
    flexBetweenTop: "row",
    mb: "6.25rem",

    mdMax: {
      display: "block",

      img: {
        width: "80%",
      },

      ".img-left": {
        ml: 0,
      },

      ".img-top": {
        display: "block",
      },

      ".img-right": {
        display: "none",
      },

      ".caption-box": {
        width: "100%",
        mt: "1.875rem",

        ".title": {
          pb: 0,
        },

        ".caption": {
          display: "none",
        },

        ".action-box": {
          ".btn": {
            mr: 0,
          },

          ".link-box": {
            display: "block",
            mt: "1.875rem",

            ".link": {
              mr: "1rem",
            },
          },
        },
      },
    },

    img: {
      width: "30%",
    },

    ".img-left": {
      ml: "-6.25rem",
    },

    ".img-right": {
      mr: "-6.25rem",
    },

    ".img-top": {
      display: "none",
    },

    ".caption-box": {
      color: "white",
      width: "72%",

      ".title": {
        fontHeebo: 300,
        fontSize: "1.875rem",
        pb: "1.5rem",
      },

      ".caption": {
        fontHeebo: 200,
        fontSize: "0.875rem",
      },

      ".action-box": {
        mt: 50,
        fontSize: 18,
        fontHeebo: 300,

        a: {
          color: "white",
        },

        ".btn": {
          border: "1px solid white",
          borderRadius: 3,
          padding: "6px 50px",
          mr: 50,
        },

        ".link-box": {
          display: "inline-block",
        },

        ".link": {
          textDecoration: "underline",
          mr: 30,
        },
      },
    },
  }),
}
