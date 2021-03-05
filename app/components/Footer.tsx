import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { css } from "app/utils/stitches.config"
import { useStore } from "../stores"
import { block } from "@hapi/hoek"
import { Link } from "blitz"

const Footer: BlitzPage = observer(() => {
  const { lang } = useStore()
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.mainContainer}>
        <div className="menu-wrapper">
          <div className="menu-box">
            <h3>{lang.t("resource")}</h3>
            <a href="https://iotex.io/developers">{lang.t("ecosystem")}</a>
            <a href="https://iotex.io/secure-hardware">{lang.t("secure_ardware")}</a>
            <a href="https://iotex.io/community-resources">{lang.t("community")}</a>
            <Link href="/research">{lang.t("research_papers")}</Link>
            <a href="https://member.iotex.io/">{lang.t("delegate_program")}</a>
            <a href="https://www.iotex.io/charity">{lang.t("charity_program")}</a>
          </div>
          <div className="menu-box">
            <h3>{lang.t("develop")}</h3>
            <a href="https://github.com/iotexproject">{lang.t("github")}</a>
            <a href="https://docs.iotex.io/">{lang.t("documentations")}</a>
            <a href="https://iotexscan.io/">{lang.t("explorer")}</a>
            <a href="https://iopay.iotex.io/">{lang.t("wallet")}</a>
            <a href="https://docs.iotex.io/docs/libraries-and-tools.html">{lang.t("tools")}</a>
          </div>
          <div className="menu-box">
            <h3>{lang.t("about_us")}</h3>
            <a href="https://iotex.io/team">{lang.t("team")}</a>
            <a href="https://iotex.io/brand-ambassador">{lang.t("brand_ambassador")}</a>
            <a href="https://forum.iotex.io/">{lang.t("forum")}</a>
          </div>
          <div className="logo-box">
            <iframe
              className="email-iframe"
              src="https://iotex.substack.com/embed"
              width="100%"
              height="320"
              style={{ background: "#262626" }}
              frameBorder="0"
              title="navigation"
              scrolling="no"
            />

            <a href="https://twitter.com/iotex_io">
              <img src="/images/twitter.png" alt="" />
            </a>
            <a href="https://t.me/IoTeXGroup">
              <img src="/images/telegram.png" alt="" />
            </a>
            <a href="https://www.reddit.com/r/IoTeX/">
              <img src="/images/reddit.png" alt="" />
            </a>
            <a href="https://medium.com/iotex">
              <img src="/images/medium.png" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw">
              <img src="/images/youtube.png" alt="" />
            </a>
            <a href="https://www.facebook.com/iotex.io/">
              <img src="/images/facebook.png" alt="" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>© 2020 IoTeX </span>
          <a href="https://iotex.io/policy">
            {lang.t("terms_of_use")} & {lang.t("privacy_policy")}
          </a>
        </div>
      </div>
    </div>
  )
})

export default Footer

const styles = {
  footer: css({
    background: "$bg2",
    height: 600,
    width: "100%",
    pt: 64,

    mdMax: {
      height: "auto",
    },
  }),
  mainContainer: css({
    margin: "0 auto",
    width: "80%",
    maxWidth: "$mainW",
    color: "white",
    fontIbm: 300,

    mdMax: {
      ".menu-wrapper": {
        display: "block",

        ".menu-box": {
          width: "100%",
          mt: 40,
        },

        ".logo-box": {
          textAlign: "left",

          ".email-iframe": {
            mt: 20,
          },
        },
      },

      ".copyright": {
        flexCenterCenter: "column",
        padding: "30px 0",

        a: {
          ml: 0,
          mt: 30,
        },
      },
    },

    ".menu-wrapper": {
      flexBetweenTop: "row",
      ".menu-box": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "17%",

        h3: {
          fontSize: 18,
          color: "white",
          margin: "0 0 28px",
          fontIbm: 300,
        },

        a: {
          display: "inline-block",
          fontSize: "14px",
          height: "16px",
          lineHeight: "16px",
          mb: "14px",
          color: "$green600",
          textDecoration: "none",
        },
      },

      ".logo-box": {
        textAlign: "center",
        flex: 1,

        ".email-iframe": {
          mb: 20,
        },

        a: {
          display: "inline-block",
          mr: 10,
          mb: 10,

          "&:last-child": {
            mr: 0,
          },
        },

        img: {
          size: 40,
        },
      },
    },

    ".copyright": {
      pt: 64,
      fontSize: 12,
      color: "white",
      textAlign: "center",

      a: {
        color: "white",
        textDecoration: "none",
        ml: 64,
      },
    },

    ".embed-page": {
      background: "red",
    },
  }),
}
