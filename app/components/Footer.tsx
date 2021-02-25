import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { css } from "app/utils/stitches.config"
import { Row, Col } from 'antd'

const Footer: BlitzPage = observer(() => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.mainContainer}>
        <div className="menu-wrapper">
          <div className="menu-box">
            <h3>Resource</h3>
            <a>Ecosystem</a>
            <a>Secure Hardware</a>
            <a>Community</a>
            <a>Research Papers</a>
            <a>Delegate Program</a>
            <a>Charity Program</a>
          </div>
          <div className="menu-box">
            <h3>Develop</h3>
            <a>Github</a>
            <a>Documentations</a>
            <a>Explorer</a>
            <a>Wallet</a>
            <a>Tools</a>
          </div>
          <div className="menu-box">
            <h3>About Us</h3>
            <a>Team</a>
            <a>Brand Ambassador</a>
            <a>Forum</a>
          </div>
          <div className="logo-box">
            <img src="/images/twitter.png" alt="" />
            <img src="/images/telegram.png" alt="" />
            <img src="/images/reddit.png" alt="" />
            <img src="/images/medium.png" alt="" />
            <img src="/images/youtube.png" alt="" />
            <img src="/images/facebook.png" alt="" />
          </div>
        </div>
        <div className="copyright">
          <span>© 2020 IoTeX  </span>
          <a>Terms of Use & Privacy Policy</a>
        </div>
      </div>
    </div>
  )
})

export default Footer

const styles = {
  footer: css({
    background: "$bg2",
    height: 420,
    width: "100%",
    pt: 64,

    smMax: {
      height: "auto"
    }
  }),
  mainContainer: css({
    margin: "0 auto",
    width: "80%",
    maxWidth: "$mainW",
    color: "white",
    fontIbm: 300,

    smMax: {
      ".menu-wrapper": {
        display: "block",

        ".menu-box": {
          width: "100%",
          mt: 40
        },

        ".logo-box": {
          textAlign: "left",

          img: {
            mr: 10
          }

        }
      },

      ".copyright": {
        flexCenterCenter: "column",
        padding: "30px 0",

        a: {
          ml: 0,
          mt: 30
        }
      }
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
          fontIbm: 300
        },

        a: {
          display: "inline-block",
          fontSize: "14px",
          height: "16px",
          lineHeight: "16px",
          mb: "14px",
          color: "$green600",
          textDecoration: "none"
        },
      },

      ".logo-box": {
        textAlign: "center",
        flex: 1,
        mt: 30,

        img: {
          size: 40,
          mr: 25,

          "&:last-child": {
            mr: 0
          }

        }
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
        ml: 64
      }

    }

  })
}
