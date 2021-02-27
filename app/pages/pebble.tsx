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
import { Form, Input } from 'antd';

const Pebble: BlitzPage = observer(() => {
  const { lang } = useStore()

  const translateHighLight = () => {

  }

  return (
    <Layout title={"Pebble"}>
      <Header/>
      <div className={`${globalStyles.container} ${styles.index}`}>
        <div className={styles.banner}>
          <video
            className="banner-bg"
            src="/images/banner-pebble.mp4"
            loop={true}
            autoPlay={true}
            muted
          />
          <img className="banner-bg-mobile" src="/images/banner-pebble-mobile.png" alt="" />
          <div className="main-container">
            <div className="content-box">
              <div className="topic">{lang.t("pebble")}</div>
              <div className="title">
                <p>{lang.t("the_most_advanced")}</p>
                <p>{lang.t("blockchain_iot")}</p>
                <HighLight
                  sourceStr={lang.t("dev_board")}
                  keyArr={[{
                    word: lang.t("dev_board_emphasize")
                  }]}
                  markActiveStyle={{color:'#43C9BA'}}/>
              </div>
              <div className="caption">
                {lang.t("pebble.banner.caption")}
              </div>
              <a className="action-buy" href="https://www.crowdsupply.com/iotex/pebble-tracker">{lang.t("buy_on_crowdsupply")}</a>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.trackSection}`}>
          <div className="main-container">
            <div className="text-wrapper">
              <div className="title">{lang.t("pebble.section1.title")}</div>
              <p className="caption">{lang.t("pebble.section1.caption")}</p>
            </div>
            <div className="card-container">
              <div className="card-item">
                <img src="/images/icon_location.png" alt=""/>
                <span>{lang.t("location")}</span>
              </div>
              <div className="card-item">
                <img src="/images/icon_temperature.png" alt=""/>
                <span>{lang.t("climate")}</span>
              </div>
              <div className="card-item">
                <img src="/images/icon_vibration.png" alt=""/>
                <span>{lang.t("motion")}</span>
              </div>
              <div className="card-item">
                <img src="/images/icon_sunlight.png" alt=""/>
                <span>{lang.t("light")}</span>
              </div>
              <div className="card-item">
                <img src="/images/icon_connectivity.png" alt=""/>
                <span>{lang.t("cellular_iot")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.connectingSection}`}>
          <video
            className="connecting-bg"
            src="/images/pebble_iot.mp4"
            loop={true}
            autoPlay={true}
            muted
          />
          <div className="main-container">
            <div className="text-wrapper">
              <div className="title">{lang.t("pebble.section2.title1")}</div>
              <div className="title">{lang.t("pebble.section2.title2")}</div>
              <p className="caption">{lang.t("pebble.section2.caption")}</p>
            </div>
            <div className="project-container">
              <div className="project-item">
                <img src="/images/industrial-processes.png" alt=""/>
                <span>{lang.t("supply_chain")}</span>
                <img src="/images/commercia.png" alt=""/>
                <span>{lang.t("contract_settlement")}</span>
              </div>
              <div className="project-item">
                <img src="/images/fixed-assets.png" alt=""/>
                <span>{lang.t("remote_monitoring")}</span>
                <img src="/images/mobile-asset-tracking.png" alt=""/>
                <span>{lang.t("transportation_logistics")}</span>
              </div>
              <div className="project-item">
                <img src="/images/wellness.png" alt=""/>
                <span>{lang.t("mobile_asset_tracking")}</span>
                <img src="/images/assistive-technologies.png" alt=""/>
                <span>{lang.t("process_automation")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.partnershipSection}`}>
          <div className="main-container partnership-container">
            <div className="logo-container">
            </div>
            <div className="partnership-box">
              <div className="title">
                {lang.t("pebble.section3.title")}
              </div>
              <p className="caption">{lang.t("pebble.section3.caption")}</p>
              <a className="action-explore" href="https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit">{lang.t("explore_our_partnership")}</a>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.qualitySection}`}>
          <div className="main-container">
            <div className="title">{lang.t("pebble.section4.title")}</div>
            <p className="caption">{lang.t("pebble.section4.caption")}</p>
            <img className="product-img" src="/images/img_pebble.png" alt=""/>
            <div className="company-container">
              <img src="/images/nordic_logo.png" alt=""/>
              <img src="/images/bosch_logo.png" alt=""/>
              <img src="/images/tdk-logo.png" alt=""/>
              <img src="/images/pmt_logo.png" alt=""/>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.iotexSection}`}>
          <div className="main-container iotex-container">
            <img className="iotex-powered-img" src="/images/powered-by-iotex.gif" alt=""/>
            <div className="iotex-box">
              <div className="title">
                {lang.t("pebble.section5.title")}
              </div>
              <p className="caption">{lang.t("pebble.section5.caption")}</p>
              <a className="action-start" href="https://docs.iotex.io/developer/hardware/pebble.html">{lang.t("get_started_with_iotex")}</a>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.thingsBoardSection}`}>
          <video
            className="board-bg"
            src="/images/thingsboard.mp4"
            loop={true}
            autoPlay={true}
            muted
          />
          <div className="main-container">
            <div className="text-wrapper">
              <div className="title">{lang.t("pebble.section6.title")}</div>
              <p className="caption">{lang.t("pebble.section6.caption")}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.subscriptionSection}`}>
          <div className="main-container subscription-container">
            <div className="title">{lang.t("pebble.section7.title")}</div>
            <Form className="form-box">
              <div className="basic-info-box">
                <Form.Item>
                  <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Email Address" />
                </Form.Item>
              </div>
              <Form.Item>
                <Input.TextArea placeholder="Message" autoSize={{ minRows: 4, maxRows: 4 }} />
              </Form.Item>
            </Form>
            <div className="submit-box">
              <span>12 + 14=</span>
              <Input className="result-box" />
              <div className="action-submit">{lang.t("submit")}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
})

export default Pebble

const styles = {

  index: css({
    background: "$bg",
    height: "100vh",
    fontPoppins: 400,

    ".main-container": {
      position: "relative",
      width: "80%",
      maxWidth: "$mainW",
      margin: "0 auto"
    }

  }),

  banner: css({
    color: "white",
    position: "relative",
    height: 780,
    overflow: "hidden",

    smMax: {
      height: 700,

      ".banner-bg": {
        display: "none"
      },

      ".banner-bg-mobile": {
        display: "block"
      },

      ".content-box": {

        ".topic": {
          fontSize: 18
        },

        ".title": {
          fontSize: 36
        },

        ".caption": {
          fontSize: 12
        },

      },

      ".topic": {
        fontSize: 18,
        mb: 10
      },

      ".indicator": {
        width: 96,
        height: 3,
        background: "$green600",
        mb: 20
      },
    },

    ".banner-bg, .banner-bg-mobile": {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },

    ".banner-bg-mobile": {
      display: "none"
    },

    ".content-box": {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      flexBetweenTop: "column",
      padding: "115px 0 200px",
      maxWidth: 600,

      ".topic": {
        fontSize: 26,
        mb: 20,
        borderBottom: "3px solid $green600"
      },

      ".title": {
        fontSize: 48,
        mb: 10,

        P: {
          lineHeight: "1.3em",
          margin: 0
        }
      },

      ".caption": {
        fontSize: 16
      },

      ".action-buy": {
        py: 10,
        px: 40,
        color: "$green600",
        textDecoration: "none",
        border: "1px solid $green600",
        br: 4,
        fontSize: 18,
        mt: 100
      }

    }


  }),

  section: css({
    py: 60,

    lgMax: {

      ".title": {
        fontSize: 40,
      }

    },

    smMax: {

      ".title": {
        fontSize: "24px !important"
      },

    },

    ".text-wrapper": {
      py: 30,
      textAlign: "center"
    },

    ".title": {
      fontSize: 48,
      mb: 10,
      fontPoppins: 500
    },

    ".caption": {
      fontSize: 14,
      width: "80%",
      margin: "0 auto",
      mt: 10
    }

  }),

  trackSection: css({
    background: "$gray50",

    smMax: {

      ".card-container": {
        flexCenterCenter: "column",

        ".card-item": {
          width: "90%",
          maxWidth: "100%",
          height: 257,
          mt: 30
        }

      }

    },

    ".card-container": {
      flexBetweenCenter: "row",

      ".card-item": {
        width: "18%",
        maxWidth: 210,
        height: 240,
        background: "white",
        boxShadow: "0px 2px 20px rgba(39, 39, 52, 0.06)",
        opacity: 1,
        br: 8,
        flexCenterCenter: "column",

        img: {
          size: 85,
          mb: 30
        },

        span: {
          fontSize: 14
        }

      }
    }

  }),

  connectingSection: css({
    position: "relative",
    overflow: "hidden",
    color: "white",

    smMax: {
      color: "white",

      ".caption": {
        width: "100%"
      },

      ".connecting-bg": {
        height: "100%"
      },

      ".project-container": {
        flexCenterCenter: "column",

        ".project-item": {
          width: "100%"
        }

      }
    },

    ".connecting-bg": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      objectFit: "cover"
    },

    ".caption": {
      pt: 20
    },

    ".project-container": {
      flexBetweenCenter: "row",
      my: 60,

      ".project-item": {
        width: "30%",
        height: 240,
        textAlign: "center",
        flexCenterCenter: "column",

        img: {
          size: 45,
          my: 30
        },

        span: {
          fontSize: 12
        }

      }
    }
  }),

  partnershipSection: css({
    background: "$gray50",
    py: "120px !important",

    smMax: {
      py: "60px !important",

      ".partnership-container": {
        flexCenterCenter: "column",

        ".logo-container": {
          width: "100%",
          pb: "80%"
        },

        ".partnership-box": {
          width: "100%",
          mt: 30,
          textAlign: "center",

          ".title": {
            lineHeight: "inherit",
            textAlign: "center"
          },

          ".caption": {
            width: "100%",
            textAlign: "center",
            mx: 0,
            my: 40
          },

        }

      },


    },

    ".partnership-container": {
      flexBetweenTop: "row",

      ".logo-container": {
        width: "36%",
        maxWidth: 393,
        maxHeight: 320,
        pb: "27%",
        br: 8,
        boxShadow: "0px 2px 20px rgba(39, 39, 52, 0.06)",
        backgroundImage: "url('/images/nordic-iotex.png')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
      },

      ".partnership-box": {
        width: "58%",

        ".title": {
          lineHeight: "64px"
        },

        ".caption": {
          mx: 0,
          my: 40
        },

        ".action-explore": {
          py: 10,
          px: 40,
          color: "$green600",
          textDecoration: "none",
          border: "1px solid $green600",
          br: 4,
          fontSize: 18,
          mt: 100
        }


      }
    }
  }),

  qualitySection: css({
    backgroundImage: "url('/images/shutterstock.jpg')",
    backgroundSize: "cover",
    color: "white",

    smMax: {
      textAlign: "center",

      ".company-container": {
        flexCenterCenter: "column",

        img: {
          mb: 30
        }

      },

      ".caption": {
        width: "100%",
        my: 30
      },

      ".product-img": {
        width: "100%"
      }

    },

    ".title": {
      textAlign: "center"
    },

    ".product-img": {
      display: "block",
      width: "87%",
      objectFit: "cover",
      margin: "80px auto"
    },

    ".company-container": {
      flexBetweenCenter: "row",
      py: 30,

      img: {
        width: 228,
        height: 66
      }


    }


  }),

  iotexSection: css({
    background: "white",
    py: "120px !important",

    smMax: {
      ".iotex-container": {
        flexCenterCenter: "column",

        ".iotex-powered-img": {
          width: "100%"
        },

        ".iotex-box": {
          width: "100%",
          textAlign: "center",

          ".title": {
            lineHeight: "inherit"
          },

          ".caption": {
            width: "100%"
          }
        }
      },
    },

    ".iotex-container": {
      flexBetweenCenter: "row",

      ".iotex-powered-img": {
        width: "36%",
        objectFit: "cover",
      },

      ".iotex-box": {
        width: "58%",

        ".title": {
          lineHeight: "64px"
        },

        ".caption": {
          mx: 0,
          my: 40
        },

        ".action-start": {
          py: 10,
          px: 40,
          color: "$green600",
          textDecoration: "none",
          border: "1px solid $green600",
          br: 4,
          fontSize: 18,
          mt: 100
        }
      }
    }
  }),

  thingsBoardSection: css({
    position: "relative",
    overflow: "hidden",
    color: "white",
    py: "160px !important",

    smMax: {
      ".board-bg": {
        height: "100%",
        objectFit: "cover"
      }
    },

    ".board-bg": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: "100%"
    },

    ".caption": {
      pt: 20
    },
  }),

  subscriptionSection: css({
    backgroundImage: "url('/images/shutterstock.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    color: "white",
    py: "120px !important",

    lgMax: {
      color: "white",

      ".title": {
        fontSize: "28px !important"
      },

      ".subscription-container": {
        px: 60
      },
    },

    smMax: {
      color: "white",

      ".subscription-container": {
        px: "0 !important"
      },

      ".title": {
        fontSize: "24px !important",
        textAlign: "center"
      },

      ".form-box": {
        mt: 40
      },

      ".basic-info-box": {
        flexCenterCenter: "column",
        pb: 0,

        ".ant-form-item": {
          width: "100%",
          mb: 20
        }
      }
    },

    ".subscription-container": {
      px: 120
    },

    ".title": {
      fontSize: "32px !important",
      textAlign: "center"
    },

    ".form-box": {
      mt: 60
    },

    ".basic-info-box": {
      flexBetweenCenter: "row",
      pb: "3%",

      ".ant-form-item": {
        width: "48.5%"
      }

    },

    ".ant-form-item": {
      mb: 0
    },

    ".ant-input": {
      padding: 16,
      color: "white",
      fontSize: 14,
      background: "#FFFFFF1A",
      border: "none",
      br: 0
    },

    ".submit-box": {
      mt: 20,
      textAlign: "right",

      ".action-submit": {
        display: "inline-block",
        padding: 15,
        color: "$green600",
        textDecoration: "none",
        border: "1px solid $green600",
        br: 4,
        fontSize: 14,
        ml: 20
      }

    },

    ".result-box": {
      size: 50
    }



  })

}