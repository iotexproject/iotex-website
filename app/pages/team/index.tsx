import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { Header } from "../../components/Header"
import { css } from "../../utils/stitches.config"
import Footer from "../../components/Footer"
import Layout from "../../layouts/Layout"
import "app/utils/styles"

const Team: BlitzPage = observer(() => {
  const { lang } = useStore()

  const userConfig = [
    {
      name: lang.t("raullen.name"),
      avatar: "images/team/Raullen_c.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/raullenchai/" },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/raullenchai" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/Raullen" },
      ],
      job: lang.t("raullen.research"),
      intros: lang.t("raullen.desc"),
    },
    {
      name: lang.t("alina.name"),
      avatar: "images/team/alina.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/alinaburya/" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/alinchikbu" },
      ],
      job: lang.t("alina.research"),
      intros: lang.t("alina.desc"),
    },
    {
      name: lang.t("qevan.name"),
      avatar: "images/team/qevan_headshot.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/donguo/" },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/guo" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/qevanguo" },
      ],
      job: lang.t("qevan.research"),
      intros: lang.t("qevan.desc"),
    },
    {
      name: lang.t("simone.name"),
      avatar: "images/team/simone-dark-bg-2-impr.jpg",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/zimne/" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/zimne1" },
      ],
      job: lang.t("simone.research"),
      intros: lang.t("simone.desc"),
    },
    {
      name: lang.t("dean.name"),
      avatar: "images/team/0.jpg",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/deanpatrickprofessional/",
        },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/deanofprivacy?lang=en" },
      ],
      job: lang.t("dean.research"),
      intros: lang.t("dean.desc"),
    },
    {
      name: lang.t("ken.name"),
      avatar: "images/team/k.png",
      links: [{ src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/seiff/" }],
      job: lang.t("ken.research"),
      intros: lang.t("ken.desc"),
    },
    {
      name: lang.t("jin.name"),
      avatar: "images/team/Jing_c.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/cbetasun/" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/cbetass" },
      ],
      job: lang.t("jin.research"),
      intros: lang.t("jin.desc"),
    },
    {
      name: lang.t("robert.name"),
      avatar: "images/team/RobertParker.jpeg",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href:
            "https://www.linkedin.com/public-profile/in/robert-parker-44b5024?challengeId=AQF1k9vkrp65uwAAAXdanQWY3LqNZyOYdcvVJ_NSIdTi39LSB1brz0XBosHDSZcBusyB7IUWnuk_-r1Qk_ox3HgSInXQdst2ng&submissionId=bd491868-6672-5f16-faec-17bf87297957",
        },
      ],
      job: lang.t("robert.research"),
      intros: lang.t("robert.desc"),
    },
    {
      name: lang.t("michael.name"),
      avatar: "images/team/Michael.png",
      links: [
        {
          src: "images/team/icon_link-1.png",
          href: "http://www.sparklabs.co.kr/lb/modal/venture/Michael_Cho.php",
        },
      ],
      job: lang.t("michael.research"),
      intros: lang.t("michael.desc"),
    },
    {
      name: lang.t("larry.name"),
      avatar: "images/team/larry.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/larry-pang/" },
        { src: "images/team/icon_twitter.png", href: "https://twitter.com/larrypang" },
      ],
      job: lang.t("larry.research"),
      intros: lang.t("larry.desc"),
    },
    {
      name: lang.t("xin.name"),
      avatar: "images/team/Xinxin_c.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/xinxin-fan-crypto/",
        },
      ],
      job: lang.t("xin.research"),
      intros: lang.t("xin.desc"),
    },
    {
      name: lang.t("dariya.name"),
      avatar: "images/team/Da.png",
      links: null,
      job: lang.t("dariya.research"),
      intros: lang.t("dariya.desc"),
    },
    {
      name: lang.t("mukul.name"),
      avatar: "images/team/Artboard-1.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/agarwalmukul/" },
      ],
      job: lang.t("mukul.research"),
      intros: lang.t("mukul.desc"),
    },
    {
      name: lang.t("saul.name"),
      avatar: "images/team/0-1.jpg",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/saul-hudson-2ab9228/",
        },
      ],
      job: lang.t("saul.research"),
      intros: lang.t("saul.desc"),
    },
    {
      name: lang.t("dorothy.name"),
      avatar: "images/team/Dorothy.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/seoyoung-ko-25499b16a/",
        },
      ],
      job: lang.t("dorothy.research"),
      intros: lang.t("dorothy.desc"),
    },
    {
      name: lang.t("dustin.name"),
      avatar: "images/team/dustin.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/dustinxie/" },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/dustinxie" },
      ],
      job: lang.t("dustin.research"),
      intros: lang.t("dustin.desc"),
    },
    {
      name: lang.t("lori.name"),
      avatar: "images/team/Lori.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/boruizhang/" },
      ],
      job: lang.t("lori.research"),
      intros: lang.t("lori.desc"),
    },
    {
      name: lang.t("sean.name"),
      avatar: "images/team/0-2.jpg",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/seanmedcalf/" },
      ],
      job: lang.t("sean.research"),
      intros: lang.t("sean.desc"),
    },
    {
      name: lang.t("jake.name"),
      avatar: "images/team/Jack.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/jack-lee-89059a29/",
        },
      ],
      job: lang.t("jake.research"),
      intros: lang.t("jake.desc"),
    },
    {
      name: lang.t("leonid.name"),
      avatar: "images/team/Leo.png",
      links: null,
      job: lang.t("leonid.research"),
      intros: lang.t("leonid.desc"),
    },
    {
      name: lang.t("adejumo.name"),
      avatar: "images/team/A.jpg",
      links: null,
      job: lang.t("adejumo.research"),
      intros: lang.t("adejumo.desc"),
    },
    {
      name: lang.t("guang.name"),
      avatar: "images/team/Gong.png",
      links: [
        {
          src: "images/team/icon_link-1.png",
          href: "https://scholar.google.com/citations?user=i2vwkRMAAAAJ&hl=en",
        },
      ],
      job: lang.t("guang.research"),
      intros: lang.t("guang.desc"),
    },
    {
      name: lang.t("yutong.name"),
      avatar: "images/team/yutong.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/yutong-pei-81006842/",
        },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/yutongp" },
      ],
      job: lang.t("yutong.research"),
      intros: lang.t("yutong.desc"),
    },
    {
      name: lang.t("sergey.name"),
      avatar: "images/team/Sergey.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/sergey-romanov1/",
        },
      ],
      job: lang.t("sergey.research"),
      intros: lang.t("sergey.desc"),
    },
    {
      name: lang.t("le.name"),
      avatar: "images/team/Hungl.jpeg",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/hunglmtb/" },
      ],
      job: lang.t("le.research"),
      intros: lang.t("le.desc"),
    },
    {
      name: lang.t("seedlet.name"),
      avatar: "images/team/zhi.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/zhi-zhong-a3660354/",
        },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/CoderZhi" },
      ],
      job: lang.t("seedlet.research"),
      intros: lang.t("seedlet.desc"),
    },
    {
      name: lang.t("heslei.name"),
      avatar: "images/team/Heslei.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/heslei-oliveira-36b5aaa0/",
        },
      ],
      job: lang.t("heslei.research"),
      intros: lang.t("heslei.desc"),
    },
    {
      name: lang.t("winter.name"),
      avatar: "images/team/Mei.png",
      links: null,
      job: lang.t("winter.research"),
      intros: lang.t("winter.desc"),
    },
    {
      name: lang.t("nguyen.name"),
      avatar: "images/team/Hoang.png",
      links: null,
      job: lang.t("nguyen.research"),
      intros: lang.t("nguyen.desc"),
    },
    {
      name: lang.t("jikun.name"),
      avatar: "images/team/0-3-1.jpg",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/jikun-liao-794b61162/",
        },
      ],
      job: lang.t("jikun.research"),
      intros: lang.t("jikun.desc"),
    },
    {
      name: lang.t("frank.name"),
      avatar: "images/team/Frank-Sun.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/yuan-frank-sun/",
        },
      ],
      job: lang.t("frank.research"),
      intros: lang.t("frank.desc"),
    },
    {
      name: lang.t("zhefeng.name"),
      avatar: "images/team/zhefeng.png",
      links: [
        { src: "images/team/icon_linkedin.png", href: "https://www.linkedin.com/in/zhefengli/" },
        { src: "images/team/icon_gitHub.png", href: "https://github.com/lizhefeng" },
      ],
      job: lang.t("zhefeng.research"),
      intros: lang.t("zhefeng.desc"),
    },
    {
      name: lang.t("alvaro.name"),
      avatar: "images/team/Alvaro-.png",
      links: [
        {
          src: "images/team/icon_linkedin.png",
          href: "https://www.linkedin.com/in/%C3%A1lvaro-manzano-sevillano-90a735168/",
        },
      ],
      job: lang.t("alvaro.research"),
      intros: lang.t("alvaro.desc"),
    },
  ]

  return (
    <Layout title={lang.t("team.head.title")}>
      <Header />

      {/* banner */}
      <article className={styles.teamBanner}>
        <div className="mw-container">
          <div className="title">{lang.t("team.title")}</div>
          <p className="subtitle">
            {lang.t("team.subtitle")} <span>{lang.t("team.email")}</span>
          </p>
        </div>
      </article>

      {/* team users */}
      <article className={styles.teamUsers}>
        <div className="mw-container teamUsersBox">
          {userConfig.map((item) => {
            return (
              <div className="team-user-item" key={item.name}>
                <img className="avatar" src={item.avatar} alt="" />
                <div className="name">{item.name}</div>
                <div className="jobs">{item.job}</div>
                <div className="links">
                  {item.links &&
                    item.links.map((item) => {
                      return (
                        <a href={item.href} key={item.href}>
                          <img src={item.src} alt="" />
                        </a>
                      )
                    })}
                </div>
                <div className="intros">{item.intros}</div>
              </div>
            )
          })}
          <div className="team-user-item"></div>
          <div className="team-user-item"></div>
        </div>
      </article>

      {/* investors */}
      <article className={styles.teamInvestors}>
        <div className="mw-container">
          <img src="images/team/investors.png" alt="" />
        </div>
      </article>

      <Footer />
    </Layout>
  )
})

const styles = {
  teamBanner: css({
    padding: "13rem 0",
    backgroundImage: "url(images/team/banner.png)",
    backgroundColor: "rgba(1,81,73,0.56)!important",
    backgroundSize: "contain",
    backgroundPosition: "top left",
    backgroundBlendMode: "soft-light",
    fontFamily: "'IBM Plex Sans',Helvetica,Arial,Lucida,sans-serif",
    ".title": {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      color: "#fff",
      marginBottom: "2.25rem",
      textAlign: "center",
      fontWeight: 300,
      md: {
        fontSize: "3.75rem",
        lineHeight: "5rem",
      },
    },
    ".subtitle": {
      width: "90%",
      textAlign: "center",
      color: "#fafafa",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.55rem",
      margin: "auto",
      span: {
        fontWeight: "bold",
        color: "#fff",
      },
      md: {
        maxWidth: "46rem",
        fontSize: "1rem",
      },
    },
  }),
  teamUsers: css({
    padding: "6.25rem 0",
    ".teamUsersBox": {
      width: "95%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      xl: {
        width: "100%",
      },
      ".team-user-item": {
        width: "80%",
        margin: "0 auto 4rem",
        md: {
          width: "46%",
          margin: "0 initial 4rem",
        },
        lg: {
          width: "15.63rem",
        },
        "&:last-child": {
          visibility: "hidden",
        },
        ".avatar": {
          width: "100%",
        },
        ".name": {
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "1rem",
          lg: {
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          },
        },
        ".jobs": {
          fontSize: "1rem",
          color: "#333",
          marginBottom: "1rem",
        },
        ".links": {
          marginBottom: "1rem",
          height: "1.5rem",
          a: {
            marginRight: "0.5rem",
            cursor: "pointer",
            img: {
              width: "1.5rem",
              height: "1.5rem",
            },
          },
        },
      },
    },
  }),
  teamInvestors: css({
    padding: "7rem 0",
    backgroundColor: "#2B2B2B",
    img: {
      width: "100%",
    },
  }),
}

export default Team
