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

const FAQ: BlitzPage = observer(() => {
  const { lang } = useStore()

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }

  return (
    <Layout title={"FAQ"}>
      <div className={globalStyles.container}>
        <Header/>
        <div className={`${styles.banner}`}>
          <div className={`${styles.mainContainer} banner-wrapper`}>
            <div className="title">{lang.t("faq.banner.title")}</div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={`${styles.mainContainer} ${styles.contentBox}`}>
            <div className={styles.leftBar}>
              <a onClick={() => {scrollToAnchor("block1")}}>{lang.t("faq.sidebar.option1")}</a>
              <a onClick={() => {scrollToAnchor("block2")}}>{lang.t("faq.sidebar.option2")}</a>
              <a onClick={() => {scrollToAnchor("block3")}}>{lang.t("faq.sidebar.option3")}</a>
              <a onClick={() => {scrollToAnchor("block4")}}>{lang.t("faq.sidebar.option4")}</a>
              <a onClick={() => {scrollToAnchor("block5")}}>{lang.t("faq.sidebar.option5")}</a>
              <a onClick={() => {scrollToAnchor("block6")}}>{lang.t("faq.sidebar.option6")}</a>
              <a onClick={() => {scrollToAnchor("block7")}}>{lang.t("faq.sidebar.option7")}</a>
              <a onClick={() => {scrollToAnchor("block8")}}>{lang.t("faq.sidebar.option8")}</a>
              <a onClick={() => {scrollToAnchor("block9")}}>{lang.t("faq.sidebar.option9")}</a>
              <a onClick={() => {scrollToAnchor("block10")}}>{lang.t("faq.sidebar.option10")}</a>
              <a onClick={() => {scrollToAnchor("block11")}}>{lang.t("faq.sidebar.option11")}</a>
              <a onClick={() => {scrollToAnchor("block12")}}>{lang.t("faq.sidebar.option12")}</a>
              <a onClick={() => {scrollToAnchor("block13")}}>{lang.t("faq.sidebar.option13")}</a>
              <a onClick={() => {scrollToAnchor("block14")}}>{lang.t("faq.sidebar.option14")}</a>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.contentBlock} id="block1">
                <h3>{lang.t("faq.block1.title")}</h3>
                <p className="article">{lang.t("faq.block1.caption1")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block1.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block1.keyword1"),
                      link: "https://iotex.io/team"
                    },
                    {
                      word: lang.t("faq.block1.keyword2"),
                      link: "https://member.iotex.io/"
                    },
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block2">
                <h3>{lang.t("faq.block2.title")}</h3>
                <p className="article">{lang.t("faq.block2.caption1")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block2.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block2.keyword1"),
                      link: "http://ucam.iotex.io/"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <img src="/images/faq_platform.png" alt=""/>
              </div>
              <div className={styles.contentBlock} id="block3">
                <h3>{lang.t("faq.block3.title")}</h3>
                <p className="article">{lang.t("faq.block3.caption1")}</p>
                <p className="article">{lang.t("faq.block3.caption2")}</p>
                <p className="article">{lang.t("faq.block3.caption3")}</p>
              </div>
              <div className={styles.contentBlock} id="block4">
                <h3>{lang.t("faq.block4.title")}</h3>
                <p className="article">
                  <HighLight
                    sourceStr={lang.t("faq.block4.caption1")}
                    keyArr={[
                      {
                        word: lang.t("faq.block4.keyword1"),
                        link: "https://medium.com/@iotex/iotex-tokenomics-burn-drop-to-bootstrap-1-million-iotex-devices-66a43a1a68d7"
                      }
                    ]}
                    markActiveStyle={{ color: "#43C9BA" }}
                  />
                  <div>{lang.t("faq.block4.caption2")}</div>
                  <div>{lang.t("faq.block4.caption3")}</div>
                  <div>{lang.t("faq.block4.caption4")}</div>
                </p>
                <p className="article">{lang.t("faq.block4.caption5")}</p>
                <img src="/images/faq-token.png" alt=""/>
                <p className="caption">{lang.t("faq.block4.caption6")}</p>
                <p className="subtitle">{lang.t("faq.block4.caption7")}</p>
                <p className="article">{lang.t("faq.block4.caption8")}</p>
                <p className="article">
                  <div>{lang.t("faq.block4.caption9")}</div>
                  <div>{lang.t("faq.block4.caption10")}</div>
                  <div>{lang.t("faq.block4.caption11")}</div>
                  <div>{lang.t("faq.block4.caption12")}</div>
                </p>
                <p className="subtitle">{lang.t("faq.block4.caption13")}</p>
                <p className="article">{lang.t("faq.block4.caption14")}</p>
                <p className="article">
                  <div>{lang.t("faq.block4.caption15")}</div>
                  <div>{lang.t("faq.block4.caption16")}</div>
                </p>
                <p className="subtitle">{lang.t("faq.block4.caption17")}</p>
                <p className="article">{lang.t("faq.block4.caption18")}</p>
                <p className="article">
                  <div>{lang.t("faq.block4.caption19")}</div>
                  <div>{lang.t("faq.block4.caption20")}</div>
                </p>
                <p className="subtitle">{lang.t("faq.block4.caption21")}</p>
                <p className="article">{lang.t("faq.block4.caption22")}</p>
                <p className="article">
                  <div>{lang.t("faq.block4.caption23")}</div>
                  <div>{lang.t("faq.block4.caption24")}</div>
                  <div>{lang.t("faq.block4.caption25")}</div>
                </p>
                <p className="italic">{lang.t("faq.block4.caption26")}</p>
                <p className="subtitle">{lang.t("faq.block4.caption27")}</p>
                <p className="article">{lang.t("faq.block4.caption28")}</p>
                <p className="article">
                  <div>{lang.t("faq.block4.caption29")}</div>
                  <div>{lang.t("faq.block4.caption30")}</div>
                  <div>{lang.t("faq.block4.caption31")}</div>
                </p>
              </div>
              <div className={styles.contentBlock} id="block5">
                <h3>{lang.t("faq.block5.title")}</h3>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block5.caption1")}
                  keyArr={[
                    {
                      word: lang.t("faq.block5.keyword1")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block5.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block5.keyword2"),
                      link: "https://medium.com/@iotex/iotex-tokenomics-burn-drop-to-bootstrap-1-million-iotex-devices-66a43a1a68d7"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <img src="/images/faq-burn-drop.png" alt=""/>
              </div>
              <div className={styles.contentBlock} id="block6">
                <h3>{lang.t("faq.block6.title")}</h3>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block6.caption1")}
                  keyArr={[
                    {
                      word: lang.t("faq.block6.keyword1"),
                      link: "https://medium.com/@iotex/iotex-tokenomics-part-1-utility-of-the-iotx-token-781ff9c866e3"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block6.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block6.keyword2")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block6.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block6.keyword3")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block6.caption4")}
                  keyArr={[
                    {
                      word: lang.t("faq.block6.keyword4")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block6.caption5")}
                  keyArr={[
                    {
                      word: lang.t("faq.block6.keyword5")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
              </div>
              <div className={styles.contentBlock} id="block7">
                <h3>{lang.t("faq.block7.title")}</h3>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block7.caption1")}
                  keyArr={[
                    {
                      word: lang.t("faq.block7.keyword1"),
                      link: "https://medium.com/iotex/iotex-delegates-program-application-voting-and-rewards-5cab7e87bd20"
                    },
                    {
                      word: lang.t("faq.block7.keyword2"),
                      link: "https://medium.com/iotex/iotex-announces-block-producer-requirements-b975655cba51"
                    },
                    {
                      word: lang.t("faq.block7.keyword2"),
                      link: "https://medium.com/@iotex/voting-for-iotex-delegates-official-kickoff-a98aadd42df2"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block8">
                <h3>{lang.t("faq.block8.title")}</h3>
                <img className="pb-1rem" src="/images/faq-journey.png" alt=""/>
                <p className="article">{lang.t("faq.block8.caption1")}</p>
                <p className="article">{lang.t("faq.block8.caption2")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block8.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block8.keyword1"),
                      link: "https://iotex.io/halo"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block9">
                <h3>{lang.t("faq.block9.title")}</h3>
                <p className="article">{lang.t("faq.block9.caption1")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block9.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block9.keyword1"),
                      link: "https://ucam.iotex.io/"
                    },
                    {
                      word: lang.t("faq.block9.keyword2"),
                      link: "https://www.tenvis.com/"
                    },
                    {
                      word: lang.t("faq.block9.keyword3"),
                      link: "https://www.amazon.com/TENVIS-Wireless-Surveillance-Security-Auto-Cruise/dp/B071DDBT7M"
                    },
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block9.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block9.keyword4"),
                      link: "https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit"
                    },
                    {
                      word: lang.t("faq.block9.keyword5"),
                      link: "https://www.nordicsemi.com/"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block10">
                <h3>{lang.t("faq.block10.title")}</h3>
                <p className="article">{lang.t("faq.block10.caption1")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption2")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword1"),
                      link: "https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword2"),
                      link: "https://medium.com/@iotex/iotex-partners-with-hardware-giant-tenvis-for-fully-private-ip-cameras-9dbfbd923128"
                    },
                    {
                      word: lang.t("faq.block10.keyword3"),
                      link: "https://www.amazon.com/TENVIS-Wireless-Surveillance-Security-Auto-Cruise/dp/B071DDBT7M"
                    },
                    {
                      word: lang.t("faq.block10.keyword4"),
                      link: "http://ucam.iotex.io/"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption4")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword5"),
                      link: "https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption5")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword6"),
                      link: "https://youtu.be/_ia0mgG08k8"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption6")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword7"),
                      link: "https://medium.com/@iotex/iotex-publishes-ieee-reports-on-blockchain-iot-c6650c26f443"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block10.caption7")}
                  keyArr={[
                    {
                      word: lang.t("faq.block10.keyword8"),
                      link: "https://thingsboard.io/"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block11">
                <h3>{lang.t("faq.block11.title")}</h3>
                <p className="article">{lang.t("faq.block11.caption1")}</p>
                <p className="article">{lang.t("faq.block11.caption2")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block11.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block11.keyword1"),
                      link: "https://www.youtube.com/watch?v=6aLjQVt4yTo"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block11.caption4")}
                  keyArr={[
                    {
                      word: lang.t("faq.block11.keyword1"),
                      link: "https://github.com/iotexproject/iotex-did"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block12">
                <h3>{lang.t("faq.block12.title")}</h3>
                <p className="article">{lang.t("faq.block12.caption1")}</p>
                <p className="article">{lang.t("faq.block12.caption2")}</p>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block12.caption3")}
                  keyArr={[
                    {
                      word: lang.t("faq.block12.keyword1")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block12.caption4")}
                  keyArr={[
                    {
                      word: lang.t("faq.block12.keyword2")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block12.caption5")}
                  keyArr={[
                    {
                      word: lang.t("faq.block12.keyword3")
                    }
                  ]}
                  markActiveStyle={{ fontWeight: 500 }}
                />
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block12.caption6")}
                  keyArr={[
                    {
                      word: lang.t("faq.block12.keyword4"),
                      link: "https://iotex.io/reference-architecture"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block13">
                <h3>{lang.t("faq.block13.title")}</h3>
                <HighLight
                  className="article"
                  sourceStr={lang.t("faq.block13.caption1")}
                  keyArr={[
                    {
                      word: lang.t("faq.block13.keyword1"),
                      link: "https://res.cloudinary.com/dokc3pa1x/image/upload/v1559623484/Research%20Paper/Academic_Paper_Yellow_Paper.pdf"
                    }
                  ]}
                  markActiveStyle={{ color: "#43C9BA" }}
                />
              </div>
              <div className={styles.contentBlock} id="block14">
                <h3>{lang.t("faq.block14.title")}</h3>
                <p className="article">{lang.t("faq.block14.caption1")}</p>
                <p className="article">{lang.t("faq.block14.caption2")}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Layout>
  )
})

export default FAQ

const styles = {
  mainContainer: css({
    position: "relative",
    width: "80%",
    maxWidth: "$mainW",
    margin: "0 auto"
  }),
  banner: css({
    minHeight: 300,
    backgroundImage: "url('/images/banner_faq.png')",
    backgroundPosition: "50%",
    color: "white",
    fontIbm: 300,
    fontSize: "3.75rem",
    padding: "3.75rem 0 2.5rem",

    ".banner-wrapper": {
      py: 30,

      ".title": {
        maxWidth: 567,
        pb: 10
      }

    }
  }),
  contentWrapper: css({
    background: "$gray50"
  }),
  contentBox: css({
    background: "$gray50",
    padding: "1.875rem 0 3.75rem",
    flexBetweenTop: "row",

    mdMax: {
      display: "block"
    }
  }),
  leftBar: css({
    background: "white",
    padding: "3.125rem 2.5rem",
    fontSize: "0.875rem",
    fontIbm: 500,
    width: "29.5%",

    mdMax: {
      width: "100%",
      mb: 33
    },

    a: {
      display: "block",
      color: "$gray400",
      pb: "0.875rem",
      cursor: "pointer",

      "&:last-child": {
        padding: 0
      }
    }

  }),
  rightContent: css({
    width: "65%",

    mdMax: {
      width: "100%",
    },

  }),
  contentBlock: css({
    background: "white",
    padding: "3.125rem 2.5rem",
    mb: 33,

    mdMax: {
      width: "100%",

      div: {
        wordBreak: "break-all"
      }

    },

    h3: {
      fontSize: "1.625rem",
      fontIbm: 300,
      color: "$gray800",
      pb: "1.625rem",
      margin: 0
    },

    ".article": {
      fontSize: "1rem",
      fontIbm: 300,
      color: "#666666",
      pb: "1rem",
      margin: 0,

      "&:last-child": {
        pb: 0
      }
    },

    ".subtitle": {
      color: "$gray800",
      fontIbm: 500
    },

    ".caption": {
      fontStyle: "italic",
      pt: "1rem",
      pb: "2rem"
    },

    ".italic": {
      fontStyle: "italic"
    },

    ".pb-1rem": {
      pb: "1rem"
    },

    img: {
      width: "100%"
    }

  })

}