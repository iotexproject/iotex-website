import { Link, BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { Dropdown, Menu } from "antd"
import { css } from "../../utils/stitches.config"
import Footer from "../../components/Footer"
import Layout from "../../layouts/Layout"
import "app/utils/styles"

const Halo: BlitzPage = observer(() => {
  const { lang } = useStore()
  const menus = (
    <Menu mode="horizontal" inlineCollapsed={false}>
      <Menu.Item key={lang.t("halo.nav1")}>
        <a href="#iotex">{lang.t("halo.nav1")}</a>
      </Menu.Item>
      <Menu.Item key={lang.t("halo.nav2")}>
        <a href="#programs">{lang.t("halo.nav2")}</a>
      </Menu.Item>
      <Menu.Item key={lang.t("halo.nav3")}>
        <a href="#resources">{lang.t("halo.nav3")}</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout title={lang.t("halo.head.title")}>
      {/* header */}
      <article className={styles.haloHeader}>
        <div className={`mw-container haloHeaderBox`}>
          <Link href="/halo">
            <img src="images/halo/Frame-3.png" alt="" />
          </Link>
          <ul>
            <li>
              <a href="#iotex">{lang.t("halo.nav1")}</a>
            </li>
            <li>
              <a href="#programs">{lang.t("halo.nav2")}</a>
            </li>
            <li>
              <a href="#resources">{lang.t("halo.nav3")}</a>
            </li>
          </ul>
          <div className="mobile-menus">
            <Dropdown overlay={menus} placement="bottomRight" trigger={["click"]} arrow>
              <img src="images/menu_icon.png" style={{ height: 32 }} alt="" />
            </Dropdown>
          </div>
        </div>
      </article>

      {/* banner */}
      <article className={styles.haloBanner}>
        <div className="mw-container haloBannerContent">
          <div className="infos">
            <div className="title">
              {lang.t("halo.title1")}
              <br/><span>{lang.t("halo.title2")}</span><br/>
              {lang.t("halo.title3")}
            </div>
            <button className={styles.yellowBtn}>
              <a href="https://github.com/iotexproject/halogrants" target="_blank" rel="noreferrer">
                {lang.t("apply")}
              </a>
            </button>
          </div>
          <img src="/images/halo/8-10.png" alt="" />
        </div>
      </article>

      {/* iotex-halo */}
      <article className={styles.iotexHalo} id="iotex">
        <div className="mw-container iotexHaloBox">
          <img className="iotex-banner" src="images/halo/Group-59.png" alt="" />
          <div className="desc">
            <img src="images/halo/IoTeX-Halo.png" alt="" />
            <p className="intros">
              {lang.t("halo.iotex1.desc1")}&nbsp;
              <span>{lang.t("halo.iotex1.desc2")}</span>&nbsp;
              {lang.t("the")}&nbsp;<span>{lang.t("halo.iotex1.desc3")}</span>&nbsp;
              {lang.t("halo.iotex1.desc4")}
            </p>
            <p className="intros">
              <span>{lang.t("halo.iotex2.desc1")}</span>&nbsp;{lang.t("halo.iotex2.desc2")}
            </p>
          </div>
        </div>
      </article>

      {/* How It Works */}
      <article className={styles.howItWorks} id="programs">
        <div className="mw-container howItWorksBox">
          <div className="title">{lang.t("halo.how.title")}</div>
          <p className="desc">{lang.t("halo.how.desc")}</p>
          <section className="howWays">
            <div className="howWayItem">
              <div className="wayTitle">{lang.t("halo.proposal.for")}</div>
              <div className="infos">
                <section>
                  <p className="wayDesc">
                    {lang.t("halo.proposal.for.desc1")}&nbsp;
                    <span>{lang.t("halo.proposal.for.desc2")}</span>&nbsp;
                    {lang.t("halo.proposal.for.desc3")}
                  </p>
                  <button className={styles.yellowBtn}>
                    <a href="https://github.com/iotexproject/halogrants">{lang.t("halo.claim")}</a>
                  </button>
                </section>
                <img className="itemPic" src="images/halo/Group-66.png" alt="" />
              </div>
            </div>
            <div className="howWayItem">
              <div className="wayTitle">{lang.t("halo.proposal.end")}</div>
              <div className="infos">
                <section>
                  <p className="wayDesc">
                    {lang.t("halo.proposal.end.desc1")}&nbsp;
                    <span>{lang.t("halo.proposal.end.desc2")}</span>&nbsp;
                    {lang.t("halo.proposal.end.desc3")}&nbsp;
                    <span>{lang.t("halo.proposal.end.desc4")}</span>&nbsp;
                    {lang.t("halo.proposal.end.desc5")}
                  </p>
                  <button className={styles.yellowBtn}>
                    <a href="https://github.com/iotexproject/halogrants">
                      {lang.t("halo.apply.now")}
                    </a>
                  </button>
                </section>
                <img className="itemPic" src="images/halo/Group.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* grants */}
      <article className={styles.grants}>
        <div className="mw-container">
          <ul>
            <li>
              <div className="circle">0</div>
              <p className="step">{lang.t("halo.step1")}</p>
            </li>
            <li>
              <div className="circle">2</div>
              <p className="step">{lang.t("halo.step1")}</p>
            </li>
            <li>
              <div className="circle">
                1B<span>IOTX</span>
              </div>
              <p className="step">{lang.t("halo.step1")}</p>
            </li>
            <li>
              <div className="circle">
                2<span>IOTX</span>
              </div>
              <p className="step">{lang.t("halo.step1")}</p>
            </li>
          </ul>
        </div>
      </article>

      {/* Resources for IoTeX Developers */}
      <article className={styles.haloResources} id="resources">
        <div className="mw-container">
          <div className="haloResourcesTitle">{lang.t("halo.resources")}</div>
          <ul>
            <li>
              <a href="https://github.com/iotexproject" target="_blank">
                <img src="images/halo/Group-36-1.png" alt="" />
                <p className="name">{lang.t("halo.github")}</p>
              </a>
            </li>
            <li>
              <a href="https://docs.iotex.io/" target="_blank">
                <img src="images/halo/document.png" alt="" />
                <p className="name">{lang.t("halo.documentation")}</p>
              </a>
            </li>
            <li>
              <a href="http://codelabs.iotex.io/" target="_blank">
                <img src="images/halo/firmware.png" alt="" />
                <p className="name">{lang.t("halo.codelabs")}</p>
              </a>
            </li>
            <li>
              <a href="https://community.iotex.io/c/research-development/7" target="_blank">
                <img src="images/halo/forum-3-1.png" alt="" />
                <p className="name">{lang.t("halo.github")}</p>
              </a>
            </li>
            <li>
              <a href="https://t.me/IoTeXDev" target="_blank">
                <img src="images/halo/chat.png" alt="" />
                <p className="name">{lang.t("halo.github")}</p>
              </a>
            </li>
          </ul>
        </div>
      </article>

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </Layout>
  )
})

const styles = {
  haloHeader: css({
    backgroundColor: "$bg2",
    ".haloHeaderBox": {
      flexBetweenCenter: "row",
      height: "3.75rem",
    },
    img: {
      height: "2.33rem",
      cursor: "pointer",
    },
    ul: {
      display: "none",
      md: {
        flexCenterLeft: "row",
        listStyleType: "none",
        margin: "0",
      },
      li: {
        marginLeft: "5rem",
        a: {
          fontSize: "0.81rem",
          color: "$green600",
          cursor: "pointer",
        },
      },
    },
    ".mobile-menus": {
      display: "block",
      md: {
        display: "none",
      },
    },
  }),
  haloBanner: css({
    background: "url('/images/halo/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    padding: "3.94rem 0 7rem 0",
    boxSizing: "border-box",
    lg: {
      padding: "3.94rem 0 5rem 0",
      backgroundSize: "100% 100%",
    },
    ".haloBannerContent": {
      flexBetweenCenter: "column",
      lg: {
        flexBetweenCenter: "row",
      },
      img: {
        width: "60%",
        lg: {
          width: "45%",
        },
        xl: {
          width: "42%",
        },
      },
      ".infos": {
        textAlign: "center",
        marginBottom: "4rem",
        md: {
          maxWidth: "60%",
        },
        lg: {
          maxWidth: "48%",
          textAlign: "left",
          marginBottom: 0,
        },
        ".title": {
          color: "$gray50",
          fontWeight: 400,
          fontSize: "1.8rem",
          lineHeight: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
          lg: {
            textAlign: "left",
            fontSize: "2.13rem",
            lineHeight: "3.13rem",
          },
          span: {
            color: "$greenFF",
          },
        },
      },
    },
  }),
  yellowBtn: css({
    backgroundColor: "$yellow",
    outline: "none",
    border: "none",
    borderRadius: "1.875rem",
    a: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#333",
      display: "block",
      padding: "0.5rem 4rem",
      "&:hover": {
        color: "#Fff",
      },
    },
  }),
  iotexHalo: css({
    padding: "1.62rem 0 5.63rem 0",
    ".iotexHaloBox": {
      flexBetweenCenter: "column",
      flexDirection: "column-reverse",
      lg: {
        flexBetweenCenter: "row",
      },
      ".iotex-banner": {
        width: "70%",
        marginTop: "4rem",
        lg: {
          width: "40%",
          marginTop: 0,
        },
      },
      ".desc": {
        lg: {
          maxWidth: "50%",
        },
        xl: {
          maxWidth: "40%",
        },
        img: {
          height: "2.5rem",
          marginBottom: "2.5rem",
          lg: {
            height: "2rem",
          },
        },
        ".intros": {
          fontSize: "1.13rem",
          lineHeight: "1.5rem",
          md: {
            fontSize: "1rem",
            lineHeight: "1.25rem",
          },
          xl: {
            fontSize: "1.13rem",
            lineHeight: "1.5rem",
          },
          span: {
            fontWeight: "bold",
          },
        },
      },
    },
  }),
  howItWorks: css({
    padding: "3.75rem 0 5.38rem",
    backgroundColor: "$greenFD",
    ".howItWorksBox": {
      ".title": {
        fontSize: "1.88rem",
        fontWeight: "bold",
        color: "#0BCDCD",
        marginBottom: "2rem",
      },
      ".desc": {
        fontSize: "1.13rem",
        color: "#333",
        marginBottom: "2.44rem",
      },
      ".howWays": {
        display: "flex",
        flexDirection: "column",
        lg: {
          flexDirection: "row",
          justifyContent: "space-between",
        },
        ".howWayItem": {
          width: "100%",
          padding: "3.38rem 2rem",
          backgroundColor: "#fff",
          marginBottom: "3rem",
          boxShadow: "0rem 0rem 1rem rgba(39, 39, 52, 0.06)",
          "&:last-child": {
            marginBottom: 0,
          },
          lg: {
            width: "48%",
            marginBottom: 0,
          },
          ".wayTitle": {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "2rem",
          },
          ".infos": {
            flexBetweenCenter: "column",
            flexDirection: "column-reverse",
            alignContent: "center",
            md: {
              flexBetweenCenter: "row",
            },
            section: {
              flexBetweenCenter: "column",
              md: {
                display: "block",
              },
            },
            ".itemPic": {
              width: "8rem",
              marginLeft: "2.2rem",
              marginBottom: "2rem",
              md: {
                marginBottom: 0,
              },
            },
            ".wayDesc": {
              fontSize: "1.13rem",
              lineHeight: "1.5rem",
              color: "#333",
              marginBottom: "2rem",
              textAlign: "center",
              md: {
                fontSize: "1rem",
                lineHeight: "1.5rem",
                textAlign: "left",
              },
              xl: {
                fontSize: "1.13rem",
                lineHeight: "1.5rem",
              },
            },
          },
        },
      },
    },
  }),
  grants: css({
    padding: "5.5rem 0 3.5rem",
    background: "linear-gradient(91deg, #333333 0%, #2A5856 100%)",
    ul: {
      listStyleType: "none",
      flexBetweenCenter: "row",
      flexWrap: "wrap",
      padding: 0,
      li: {
        flexCenterCenter: "column",
        marginBottom: "2rem",
        width: "100%",
        "&:last-child": {
          marginBottom: 0,
        },
        md: {
          width: "50%",
        },
        lg: {
          width: "12.25rem",
          marginBottom: 0,
        },
        ".circle": {
          width: "12.25rem",
          height: "12.25rem",
          backgroundImage: "url(images/halo/circle.png)",
          backgroundSize: "100% 100%",
          flexCenterCenter: "column",
          marginBottom: "1.5rem",
          fontSize: "3rem",
          color: "#FFD900",
          span: {
            display: "block",
            color: "#09E6E6",
            fontSize: "1rem",
            marginTop: "-10px",
          },
        },
        ".step": {
          textAlign: "center",
          fontSize: "1.5rem",
          lineHeight: "2rem",
          color: "#09E6E6",
          fontWeight: "bold",
        },
      },
    },
  }),
  footerContainer: css({
    paddingTop: "6.75rem",
    backgroundImage: "url('/images/halo/Vector-2.png')",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    md: {
      backgroundSize: "100% 100%",
      paddingTop: "4.75rem",
    },
    ".iotex-footer": {
      backgroundColor: "transparent !important",
    },
  }),
  haloResources: css({
    padding: "3.75rem 0 0 0",
    backgroundColor: "#fff",
    md: {
      padding: "3.75rem 0 4.5rem 0",
    },
    ".haloResourcesTitle": {
      fontSize: "1.88rem",
      color: "#0BCDCD",
      fontWeight: "bold",
      marginBottom: "3.94rem",
    },
    ul: {
      padding: 0,
      listStyleType: "none",
      flexBetweenCenter: "column",
      flexWrap: "nowrap",
      md: {
        flexWrap: "wrap",
        flexBetweenCenter: "row",
      },
      li: {
        width: "100%",
        boxShadow: "0rem 0rem 1rem rgba(39, 39, 52, 0.06)",
        flexCenterCenter: "column",
        marginBottom: "2rem",
        "&:last-child": {
          marginBottom: 0,
        },
        md: {
          width: "48%",
        },
        lg: {
          width: "11.88rem",
          marginBottom: 0,
        },
        a: {
          width: "100%",
          flexCenterCenter: "column",
          padding: "1.96rem 0 1.5rem 0",
        },
        img: {
          height: "4rem",
          marginBottom: "1rem",
        },
        ".name": {
          fontSize: "1.13rem",
          color: "#0BCDCD",
          marginBottom: 0,
        },
      },
    },
  }),
}

export default Halo
