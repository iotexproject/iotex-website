import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { Header } from "../components/Header"
import { globalStyles } from "app/utils/styles"
import { css } from "../utils/stitches.config"
import Layout from "../layouts/Layout"

const Home: BlitzPage = observer(() => {
  const { lang } = useStore()
  return (
    <Layout title={lang.t("home.title")}>
      <div className={styles.iotexAlert}>{lang.t("home.alert.txt")}</div>
      <Header />
      <div className={globalStyles.container}>
        {/* banner */}
        <article className={styles.videoContainer}>
          <video
            className="large_banner"
            src="images/large_home_banner.mp4"
            width="100%"
            height="100%"
            loop={true}
            autoPlay={true}
            muted
          ></video>
          <video
            className="small_banner"
            src="images/small_home_banner.mp4"
            width="100%"
            height="100%"
            loop={true}
            autoPlay={true}
            muted
          ></video>
          <div className="banner_txt">
            <img src="images/banner_txt.gif" alt="" />
          </div>
        </article>

        {/* logos */}
        <article className={styles.friendShip}>
          <img className="mw-container" src="images/logos.png" alt="" />
        </article>

        {/* The Internet of Things, Reimagined */}
        <article className={styles.reimagined}>
          <div className="mw-container reimagined-content">
            <section>
              <div className="reimagined-title">
                {lang.t("reimagined.title1")}
                <span>{lang.t("reimagined.title2")}</span>
              </div>
              <p className="reimagined-desc">
                {lang.t("reimagined.desc1")} <span>{lang.t("reimagined.desc2")}</span>
                {lang.t("reimagined.desc3")}
              </p>
              <ul className="reimagined-links">
                <li>
                  <a href="https://iott.network/about" target="_blank">
                    {lang.t("reimagined.links1")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
                <li>
                  <a href="" target="_blank">
                    {lang.t("reimagined.links2")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
                <li>
                  <a href="https://iott.network/" target="_blank">
                    {lang.t("reimagined.links3")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
              </ul>
            </section>
            <img className="things-gif" src="images/things.gif" alt="" />
          </div>
        </article>

        {/* Empowering the Future Machine Economy */}
        <article className={styles.empowering}>
          <div className="mw-container empowering-content">
            <img className="things-gif" src="images/empowering.gif" alt="" />
            <section>
              <div className="empowering-title">
                {lang.t("empowering.title1")} <span>{lang.t("empowering.title2")}</span>
              </div>
              <p className="empowering-desc">{lang.t("empowering.desc")}</p>
              <ul className="empowering-links">
                <li>
                  <a href="https://github.com/iotexproject" target="_blank">
                    {lang.t("empowering.links1")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
                <li>
                  <a href="http://docs.iotex.io/" target="_blank">
                    {lang.t("empowering.links2")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
              </ul>
            </section>
          </div>
        </article>

        {/* Own Your */}
        <article className={styles.own}>
          <div className="mw-container own-content">
            <section>
              <div className="own-title">
                {lang.t("own.your")} <span>{lang.t("data")}</span>. <br />
                {lang.t("own.your")} <span>{lang.t("identity")}</span>. <br />
                {lang.t("own.your")} <span>{lang.t("privacy")}</span>.
              </div>
              <p className="own-desc">{lang.t("own.desc")}</p>
              <ul className="own-links">
                <li>
                  <a href="https://ucam.iotex.io/" target="_blank">
                    {lang.t("own.links1")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
                <li>
                  <a
                    href="https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit?utm_campaign=SoMe%20promotion&utm_source=facebook&utm_medium=social&utm_content=News%20release:%20IoTeX"
                    target="_blank"
                  >
                    {lang.t("own.links2")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
                <li>
                  <a href="" target="_blank">
                    {lang.t("own.links3")}
                  </a>
                  <img src="images/right-arrow.png" alt="" />
                </li>
              </ul>
            </section>
            <img className="things-gif" src="images/own.gif" alt="" />
          </div>
        </article>
      </div>
    </Layout>
  )
})

const styles = {
  iotexAlert: css({
    background: "linear-gradient(91deg, #FAD002 0%, #06BFC1 100%)",
    fontSize: "16px",
    color: "#333",
    fontWeight: 400,
    textAlign: "center",
    padding: "0.75rem 0",
    flexCenterCenter: "row",
    cursor: "pointer",
  }),
  videoContainer: css({
    position: "relative",
    height: "max-content",
    ".large_banner": {
      display: "none",
      md: {
        display: "block",
      },
    },
    ".small_banner": {
      display: "block",
      md: {
        display: "none",
      },
    },
    ".banner_txt": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      flexCenterCenter: "row",
      img: {
        width: "40%",
      },
    },
  }),
  friendShip: css({
    backgroundColor: "#262626",
    flexCenterCenter: "row",
    img: {
      width: "90%",
      height: "auto",
      md: {
        height: "8.75rem",
      },
    },
  }),
  reimagined: css({
    backgroundColor: "#FAFAFA",
    padding: "4rem 0",
    lg: {
      padding: "12.25rem 0 13.88rem 0",
    },
    ".reimagined-content": {
      flexCenterCenter: "column",
      flexDirection: "column-reverse",
      lg: {
        flexBetweenCenter: "row",
        flexDirection: "row",
      },
      ".things-gif": {
        maxWidth: "337px",
        width: "100%",
        marginBottom: "4rem",
        lg: {
          maxWidth: "30rem",
          marginBottom: 0,
        },
      },
      ".reimagined-title": {
        fontSize: "1.8rem",
        lineHeight: "2.5rem",
        fontFamily: "Helvetica",
        fontWeight: 400,
        color: "#333333",
        textAlign: "center",
        marginBottom: "2rem",
        span: {
          color: "#43C9BA",
        },
        lg: {
          fontSize: "3rem",
          lineHeight: "5rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".reimagined-desc": {
        width: "100%",
        fontWeight: 400,
        fontFamily: "Helvetica",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        color: "#666666",
        marginBottom: "2rem",
        textAlign: "center",
        span: {
          fontWeight: "bold",
        },
        lg: {
          fontSize: "1.25rem",
          lineHeight: "1.88rem",
          maxWidth: "30rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".reimagined-links": {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        textAlign: "center",
        lg: {
          textAlign: "left",
        },
        li: {
          fontSize: "1rem",
          fontFamily: "Helvetica",
          fontWeight: 500,
          lineHeight: "1.25rem",
          color: "#333",
          marginBottom: "0.5rem",
          "&:last-child": {
            marginBottom: 0,
          },
          a: {
            marginRight: "2rem",
            color: "#333",
            "&:hover": {
              color: "#43C9BA",
            },
          },
          lg: {
            fontWeight: "bold",
            fontSize: "1.13rem",
            lineHeight: "1.5rem",
            marginBottom: "1.5rem",
          },
        },
      },
    },
  }),
  empowering: css({
    backgroundColor: "#262626",
    padding: "4rem 0",
    lg: {
      padding: "5.81rem 0",
    },
    ".empowering-content": {
      flexCenterCenter: "column",
      lg: {
        flexBetweenCenter: "row",
      },
      ".things-gif": {
        width: "100%",
        maxWidth: "337px",
        marginBottom: "4rem",
        lg: {
          maxWidth: "30rem",
          marginRight: "15rem",
          marginBottom: 0,
        },
      },
      ".empowering-title": {
        fontSize: "1.8rem",
        fontFamily: "Helvetica",
        fontWeight: 400,
        lineHeight: "2.5rem",
        color: "#fff",
        marginBottom: "2rem",
        textAlign: "center",
        span: {
          color: "#43C9BA",
        },
        lg: {
          fontSize: "3rem",
          lineHeight: "5rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".empowering-desc": {
        maxWidth: "100%",
        fontSize: "1rem",
        fontWeight: 400,
        fontFamily: "Helvetica",
        lineHeight: "1.5rem",
        color: "#fff",
        marginBottom: "2rem",
        textAlign: "center",
        lg: {
          fontSize: "1.25rem",
          lineHeight: "1.88rem",
          maxWidth: "30rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".empowering-links": {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        textAlign: "center",
        lg: {
          textAlign: "left",
        },
        li: {
          fontSize: "1rem",
          fontFamily: "Helvetica",
          fontWeight: 500,
          lineHeight: "1.25rem",
          color: "#fff",
          marginBottom: "0.5rem",
          "&:last-child": {
            marginBottom: 0,
          },
          a: {
            marginRight: "2rem",
            color: "#333",
            "&:hover": {
              color: "#43C9BA",
            },
          },
          lg: {
            fontWeight: "bold",
            fontSize: "1.13rem",
            lineHeight: "1.5rem",
            marginBottom: "1.5rem",
          },
        },
      },
    },
  }),
  own: css({
    backgroundColor: "#FAFAFA",
    padding: "4rem 0",
    lg: {
      padding: "9.75rem 0",
    },
    ".own-content": {
      flexCenterCenter: "column",
      flexDirection: "column-reverse",
      lg: {
        flexBetweenCenter: "row",
        flexDirection: "row",
      },
      ".things-gif": {
        width: "100%",
        maxWidth: "337px",
        marginBottom: "4rem",
        lg: {
          maxWidth: "36.55rem",
          marginBottom: 0,
        },
      },
      ".own-title": {
        fontSize: "1.8rem",
        fontFamily: "Helvetica",
        fontWeight: 400,
        lineHeight: "2.5rem",
        color: "#333333",
        marginBottom: "2rem",
        textAlign: "center",
        span: {
          color: "#43C9BA",
        },
        lg: {
          fontSize: "3rem",
          lineHeight: "5rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".own-desc": {
        width: "100%",
        fontSize: "1rem",
        fontWeight: 400,
        fontFamily: "Helvetica",
        lineHeight: "1.5rem",
        color: "#666666",
        marginBottom: "2rem",
        textAlign: "center",
        span: {
          fontWeight: "bold",
        },
        lg: {
          fontSize: "1.25rem",
          lineHeight: "1.88rem",
          maxWidth: "30rem",
          textAlign: "left",
          marginBottom: "4rem",
        },
      },
      ".own-links": {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        textAlign: "center",
        lg: {
          textAlign: "left",
        },
        li: {
          fontSize: "1rem",
          fontFamily: "Helvetica",
          fontWeight: 500,
          lineHeight: "1.25rem",
          color: "#333",
          marginBottom: "0.6rem",
          "&:last-child": {
            marginBottom: 0,
          },
          a: {
            marginRight: "2rem",
            color: "#333",
            "&:hover": {
              color: "#43C9BA",
            },
          },
          lg: {
            fontWeight: "bold",
            fontSize: "1.13rem",
            lineHeight: "1.5rem",
            marginBottom: "1.5rem",
          },
        },
      },
    },
  }),
}

export default Home
