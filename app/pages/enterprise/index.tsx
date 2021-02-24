import { Head, BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { useStore } from "app/stores"
import { Header } from "../../components/Header"
import { Form, Input, InputNumber, Button } from "antd"
import { globalStyles } from "app/utils/styles"
import { css } from "../../utils/stitches.config"

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
}

const Enterprise: BlitzPage = observer(() => {
  const { lang } = useStore()

  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>{lang.t("enterprise.title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={globalStyles.container}>
        {/* banner */}
        <article className={styles.enterpriseBanner}>
          <div>
            <div className="title">{lang.t("enterprise.lager.title")}</div>
            <div className="subTitle">{lang.t("enterprise.sub.title")}</div>
            <div className="links">
              <button className="link-btn">{lang.t("enterprise.banner.btn1")}</button>
              <button className="link-btn">{lang.t("enterprise.banner.btn2")}</button>
            </div>
          </div>
        </article>

        {/* TRUSTED BY GLOBAL INDUSTRY LEADERS */}
        <article className={styles.enterpriseGroup1}>
          <div className="mw-container">
            <div className={styles.commonTitle}>{lang.t("enterprise.group1.title")}</div>
            <div className={styles.commonSubTitle}>{lang.t("enterprise.group1.subtitle")}</div>
            <ul>
              <li>
                <img src="images/leaders3.png" alt="" />
                <div className="title">{lang.t("enterprise.group1.case1")}</div>
                <p className="desc">{lang.t("enterprise.group1.desc1")}</p>
                <button className={styles.learnMore}>{lang.t("learn.more")}</button>
              </li>
              <li>
                <img src="images/leaders2.png" alt="" />
                <div className="title">{lang.t("enterprise.group1.case2")}</div>
                <p className="desc">{lang.t("enterprise.group1.desc2")}</p>
                <button className={styles.learnMore}>{lang.t("learn.more")}</button>
              </li>
              <li>
                <img src="images/leaders1.png" alt="" />
                <div className="title">{lang.t("enterprise.group1.case3")}</div>
                <p className="desc">{lang.t("enterprise.group1.desc3")}</p>
                <button className={styles.learnMore}>{lang.t("learn.more")}</button>
              </li>
            </ul>
          </div>
        </article>

        {/* Core Technology */}
        <article className={styles.enterpriseCore}>
          <div className="mw-container" style={{ textAlign: "center" }}>
            <div className={styles.commonTitle}>{lang.t("enterprise.group2.title")}</div>
            <div className={styles.commonSubTitle}>{lang.t("enterprise.group2.subtitle")}</div>
            <div className="core-content">
              <ul>
                <li>
                  <img src="images/core1.png" alt="" />
                  <div className="infos">
                    <div className="title">{lang.t("enterprise.group2.core1.title")}</div>
                    <p className="desc">{lang.t("enterprise.group2.core1.desc")}</p>
                  </div>
                </li>
                <li>
                  <img src="images/core2.png" alt="" />
                  <div className="infos">
                    <div className="title">{lang.t("enterprise.group2.core2.title")}</div>
                    <p className="desc">{lang.t("enterprise.group2.core2.desc")}</p>
                  </div>
                </li>
                <li>
                  <img src="images/core3.png" alt="" />
                  <div className="infos">
                    <div className="title">{lang.t("enterprise.group2.core3.title")}</div>
                    <p className="desc">{lang.t("enterprise.group2.core3.desc")}</p>
                  </div>
                </li>
              </ul>
              <img className="core-steps" src="images/core-right.png" alt="" />
            </div>
            <button className={styles.learnMore}>{lang.t("learn.more")}</button>
          </div>
        </article>

        {/* Ongoing IoTeX Use Cases for Enterprise */}
        <article className={styles.ongoing}>
          <div className="mw-container">
            <div className={styles.commonTitle} style={{ marginBottom: "4rem" }}>
              {lang.t("enterprise.group3.title")}
            </div>
            <ul>
              <li>
                <img src="images/cases1.png" alt="" />
                <div className="title">{lang.t("enterprise.group3.case1.title")}</div>
                <p className="desc">{lang.t("enterprise.group3.case1.desc")}</p>
              </li>
              <li>
                <img src="images/cases2.png" alt="" />
                <div className="title">{lang.t("enterprise.group3.case2.title")}</div>
                <p className="desc">{lang.t("enterprise.group3.case2.desc")}</p>
              </li>
              <li>
                <img src="images/cases3.png" alt="" />
                <div className="title">{lang.t("enterprise.group3.case3.title")}</div>
                <p className="desc">{lang.t("enterprise.group3.case3.desc")}</p>
              </li>
            </ul>
          </div>
        </article>

        {/* Interested in learning more about IoTeX for Enterprise? */}
        <article className={styles.enterpriseForm}>
          <div className="mw-container" style={{ textAlign: "center" }}>
            <div className={styles.commonTitle}>{lang.t("enterprise.form.title")}</div>
            <div className={styles.tips}>{lang.t("enterprise.form.subtitle")}</div>
            <div className="interstedForm">
              <Form name="intersted" onFinish={onFinish} validateMessages={validateMessages}>
                <div className="inline-form">
                  <Form.Item
                    name={["user", "name"]}
                    rules={[{ required: true }]}
                    className="username"
                  >
                    <Input
                      style={{ width: "100%" }}
                      size="large"
                      placeholder={lang.t("your.name")}
                    />
                  </Form.Item>
                  <Form.Item name={["user", "email"]} rules={[{ type: "email" }]} className="email">
                    <Input placeholder={lang.t("email")} size="large" />
                  </Form.Item>
                </div>
                <Form.Item name={["user", "website"]}>
                  <Input size="large" placeholder={lang.t("company.name")} />
                </Form.Item>
                <Form.Item name={["user", "introduction"]}>
                  <Input.TextArea size="large" placeholder={lang.t("question")} />
                </Form.Item>
                <Form.Item style={{ marginTop: "2rem", marginBottom: 0 }}>
                  <button type="submit" className={styles.learnMore}>
                    {lang.t("submit")}
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </article>
      </div>
    </>
  )
})

const styles = {
  enterpriseBanner: css({
    height: "28rem",
    backgroundImage: "url('images/enterprise_banner.png')",
    backgroundSize: "cover",
    flexCenterCenter: "column",
    ".title": {
      color: "#FAFAFA",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      marginBottom: "1rem",
      textAlign: "center",
      sm: {
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
      },
      md: {
        fontSize: "2.63rem",
        lineHeight: "3.5rem",
      },
    },
    ".subTitle": {
      fontFamily: "Helvetica",
      fontSize: "0.5rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
      color: "#fff",
      textAlign: "center",
      maxWidth: "80%",
      margin: "0 auto 3rem",
      sm: {
        marginBottom: "6.69rem",
        maxWidth: "100%",
        fontSize: "0.88rem",
        lineHeight: "1.5rem",
      },
      md: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    ".links": {
      flexBetweenCenter: "column",
      width: "90%",
      margin: "auto",
      sm: {
        flexBetweenCenter: "row",
        width: "95%",
      },
      md: {
        width: "100%",
        maxWidth: "50rem",
      },
    },
    ".link-btn": {
      outline: "none",
      border: "1px solid #FAFAFA",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontFamily: "Helvetica",
      fontWeight: 400,
      color: "#fafafa",
      backgroundColor: "transparent",
      padding: "0.4rem 2rem",
      boxSizing: "border-box",
      borderRadius: "0.5rem",
      "&:first-child": {
        marginBottom: "1rem",
        sm: {
          marginBottom: 0,
        },
      },
      sm: {
        padding: "0.8rem 2rem",
        marginBottom: 0,
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
      },
      md: {
        width: "21rem",
      },
      lg: {
        maxWidth: "22.5rem",
        width: "22.5rem",
      },
      "&:hover": {
        backgroundColor: "#333333",
        borderColor: "#333333",
      },
    },
  }),
  commonTitle: css({
    fontSize: "1.25rem",
    lineHeight: "2rem",
    color: "#333",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
    sm: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      marginBottom: "2rem",
    },
    md: {
      fontSize: "1.63rem",
      lineHeight: "2.5rem",
      marginBottom: "1.5rem",
    },
  }),
  commonSubTitle: css({
    fontSize: "0.88rem",
    lineHeight: "1.5rem",
    color: "#333",
    fontFamily: "Helvetica",
    fontWeight: 400,
    maxWidth: "100%",
    margin: "auto",
    textAlign: "center",
    sm: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
    md: {
      fontSize: "0.88rem",
      lineHeight: "1.5rem",
      maxWidth: "70%",
    },
  }),
  learnMore: css({
    outline: "none",
    width: "10rem",
    height: "2.5rem",
    border: "1px solid #43C9BA",
    backgroundColor: "transparent",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "2.5rem",
    color: "#43C9BA",
    fontFamily: "Helvetica",
    borderRadius: "0.5rem",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#333333",
      borderColor: "#333333",
      color: "#fff",
    },
    sm: {
      width: "15rem",
      height: "3.13rem",
      fontSize: "1.25rem",
      lineHeight: "3.13rem",
    },
  }),
  enterpriseGroup1: css({
    backgroundColor: "#fff",
    padding: "4rem 0 5rem 0",
    ul: {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      flexBetweenCenter: "column",
      marginTop: "2rem",
      lg: {
        marginTop: "3rem",
        flexBetweenCenter: "row",
      },
      li: {
        flexCenterCenter: "column",
        marginBottom: "1rem",
        "&:last-child": {
          marginBottom: 0,
        },
        lg: {
          marginBottom: 0,
          maxWidth: "22rem",
        },
        img: {
          width: "100%",
          marginBottom: "1rem",
        },
        ".title": {
          fontSize: "1.25rem",
          lineHeight: "2rem",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: "1rem",
          md: {
            maxWidth: "18.75rem",
          },
        },
        ".desc": {
          marginBottom: "3rem",
          textAlign: "center",
          md: {
            maxWidth: "18.75rem",
          },
        },
      },
    },
  }),
  enterpriseCore: css({
    backgroundColor: "#FAFAFA",
    padding: "4rem 0 7.5rem",
    ".core-content": {
      marginTop: "4rem",
      flexBetweenCenter: "column",
      lg: {
        marginTop: "7.5rem",
        flexBetweenCenter: "row",
        alignItems: "flex-start",
      },
      ul: {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        li: {
          textAlign: "left",
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "2rem",
          sm: {
            marginBottom: "4rem",
          },
          img: {
            width: "2rem",
            height: "2rem",
            marginRight: "1rem",
            sm: {
              width: "4rem",
              height: "4rem",
              marginRight: "2rem",
            },
            md: {
              width: "2.5rem",
              height: "2.5rem",
              marginRight: "1.5rem",
            },
          },
          ".infos": {
            ".title": {
              fontSize: "1.2rem",
              lineHeight: "2rem",
              fontWeight: 400,
              marginBottom: "0.5rem",
              sm: {
                fontSize: "2rem",
                lineHeight: "3rem",
              },
              md: {
                fontSize: "1.63rem",
                lineHeight: "2rem",
              },
            },
            ".desc": {
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
              color: "#666",
              fontWeight: 400,
              sm: {
                fontSize: "1.25rem",
                lineHeight: "2rem",
              },
              md: {
                fontSize: "0.88rem",
                lineHeight: "1.5rem",
              },
            },
          },
        },
      },
      ".core-steps": {
        width: "100%",
        marginBottom: "3rem",
        lg: {
          maxWidth: "45%",
          marginLeft: "6rem",
          marginBottom: 0,
        },
      },
    },
  }),
  ongoing: css({
    backgroundColor: "#FFFFFF",
    padding: "4rem 0 7rem",
    ul: {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      flexBetweenCenter: "column",
      md: {
        flexBetweenCenter: "row",
        alignItems: "flex-start",
      },
      li: {
        maxWidth: "100%",
        textAlign: "center",
        marginBottom: "3rem",
        "&:last-child": {
          marginBottom: 0,
        },
        md: {
          marginBottom: 0,
          maxWidth: "30%",
        },
        img: {
          width: "100%",
          marginBottom: "1.5rem",
        },
        ".title": {
          color: "#333",
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          fontWeight: "bold",
          fontFamily: "Helvetica",
          marginBottom: "1rem",
          sm: {
            fontSize: "1.6rem",
            lineHeight: "2.5rem",
            marginBottom: "1.5rem",
          },
          md: {
            fontSize: "1.25rem",
            lineHeight: "2rem",
            marginBottom: "1rem",
          },
        },
        ".desc": {
          color: "#666",
          fontSize: "0.88rem",
          lineHeight: "1.5rem",
          fontWeight: 400,
          fontFamily: "Helvetica",
          sm: {
            fontSize: "1.25rem",
            lineHeight: "2rem",
          },
          md: {
            fontSize: "0.88rem",
            lineHeight: "1.5rem",
          },
        },
      },
    },
  }),
  enterpriseForm: css({
    backgroundColor: "#D0DBE2",
    padding: "4rem 0 7.25rem",
    ".inline-form": {
      flexBetweenCenter: "column",
      md: {
        flexBetweenCenter: "row",
      },
      ".username": {
        width: "100%",
        md: {
          width: "48%",
        },
      },
      ".email": {
        width: "100%",
        md: {
          width: "48%",
        },
      },
    },
    ".interstedForm": {
      maxWidth: "50rem",
      margin: "auto",
    },
  }),
  tips: css({
    fontSize: "1.25rem",
    fontWeight: 400,
    color: "#333",
    fontFamily: "Helvetica",
    textAlign: "center",
    marginBottom: "4rem",
    md: {
      fontSize: "1.63rem",
    },
  }),
}

export default Enterprise
