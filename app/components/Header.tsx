import React from "react"
import { useRouter } from "next/router"
import { Menu, Dropdown, Button } from "antd"
import { observer } from "mobx-react-lite"
import { DownOutlined } from "@ant-design/icons"
import { Link } from "blitz"
import { css } from "../utils/stitches.config"
import { useStore } from "../stores"

const { SubMenu } = Menu

export const Header = observer((props) => {
  const router = useRouter()
  const { lang } = useStore()

  const menus = (
    <Menu mode="horizontal">
      <SubMenu
        key="getStared"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>{lang.t("get.started")}</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Onboarding Pack">
          <a href="https://iotex.gitbook.io/iotex/vision-and-mission" target="_blank">
            {lang.t("Onboarding Pack")}
          </a>
        </Menu.Item>
        <Menu.Item key="For Developers">
          <a href="https://docs.iotex.io/" target="_blank">
            {lang.t("For Developers")}
          </a>
        </Menu.Item>
        <Menu.Item key="For Enterprise">
          <Link href="/enterprise">For Enterprise</Link>
        </Menu.Item>
        <Menu.Item key="For Delegates">
          <a href="https://community.iotex.io/t/official-iotex-delegates-thread/1263">
            {lang.t("For Delegates")}
          </a>
        </Menu.Item>
        <Menu.Item key="Invest in IOTX">
          <Link href="/for-investors">{lang.t("Invest in IOTX")}</Link>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://iotex.io/faq/">{lang.t("FAQ")}</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Platform"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>{lang.t("platform")}</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Ecosystem">
          <a href="https://ecosystem.iotex.io/">{lang.t("ecosystem")}</a>
        </Menu.Item>
        <Menu.Item key="Community Forum">
          <a href="https://community.iotex.io/">{lang.t("Community Forum")}</a>
        </Menu.Item>
        <Menu.Item key="Dev Docs">
          <a href="https://docs.iotex.io/">{lang.t("Dev Docs")}</a>
        </Menu.Item>
        <Menu.Item key="Github (open-source)">
          <a href="https://github.com/iotexproject">{lang.t("Github (open-source)")}</a>
        </Menu.Item>
        <Menu.Item key="Burn-Drop">
          <a href="https://burndrop.iotex.io/">{lang.t("Burn-Drop")}</a>
        </Menu.Item>
        <Menu.Item key="Codelabs">
          <a href="https://codelabs.iotex.io/">{lang.t("Codelabs")}</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Tools"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>{lang.t("Tools")}</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Staking Portal">
          <a href="https://member.iotex.io/">{lang.t("Staking Portal")}</a>
        </Menu.Item>
        <Menu.Item key="ioPay Wallet">
          <a href="https://iopay.iotex.io/">{lang.t("ioPay Wallet")}</a>
        </Menu.Item>
        <Menu.Item key="iotexscan Explorer">
          <a href="https://iotexscan.io/">{lang.t("iotexscan Explorer")}</a>
        </Menu.Item>
        <Menu.Item key="mimo DEX">
          <a href="https://mimo.finance/">{lang.t("mimo DEX")}</a>
        </Menu.Item>
        <Menu.Item key="ioctl CLI">
          <a href="https://docs.iotex.io/developer/ioctl/install.html">{lang.t("ioctl CLI")}</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Foundation"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>{lang.t("Foundation")}</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Vision">
          <a href="https://iott.network/about">{lang.t("Vision")}</a>
        </Menu.Item>
        <Menu.Item key="Team">
          <a href="https://iotex.io/team/">{lang.t("Team")}</a>
        </Menu.Item>
        <Menu.Item key="Research">
          <a href="https://iotex.io/research/">{lang.t("Research")}</a>
        </Menu.Item>
        <Menu.Item key="Roadmap">
          <a href="https://iotex.medium.com/iotex-2021-the-year-ahead-acf743e2df03">
            {lang.t("Roadmap")}
          </a>
        </Menu.Item>
        <Menu.Item key="Blog">
          <a href="https://iotex.medium.com/">{lang.t("Blog")}</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Lang"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>
              {lang.lang === "en" ? (
                <img src="images/english_icon.png" style={{ height: "16px" }} alt="" />
              ) : (
                <img src="/public/images/chinese_icon.png" style={{ height: "16px" }} alt="" />
              )}
            </span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="english" onClick={() => lang.setLang("en")}>
          <img
            src="images/english_icon.png"
            style={{ height: "16px", marginRight: "1rem" }}
            alt=""
          />{" "}
          English
        </Menu.Item>
        <Menu.Item key="chinese" onClick={() => lang.setLang("zh_CN")}>
          <img
            src="images/chinese_icon.png"
            style={{ height: "16px", marginRight: "1rem" }}
            alt=""
          />{" "}
          中文
        </Menu.Item>
      </SubMenu>
    </Menu>
  )

  return (
    <div className={styles.commonHeader}>
      <div className="mw-container header-box">
        <Link href="/">
          <img className="logo" src="/images/logo_iotex.png" alt="" />
        </Link>
        <div className="large-menus">{menus}</div>
        <div className="mobile-menus">
          <Dropdown overlay={menus} placement="bottomRight" trigger={["click"]} arrow>
            <img src="images/menu_icon.png" style={{ height: 32 }} alt="" />
          </Dropdown>
        </div>
      </div>
    </div>
  )
})

const styles = {
  commonHeader: css({
    padding: "0.88rem 0",
    background: "#262626",
    display: "flex",
    alignItems: "center",
    ".logo": {
      width: "6.67rem",
      cursor: "pointer",
    },
    ".header-box": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ".large-menus": {
        display: "none",
        md: {
          display: "block",
        },
      },
      ".mobile-menus": {
        display: "block",
        md: {
          display: "none",
        },
      },
    },
  }),
}
