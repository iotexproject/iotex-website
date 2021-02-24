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
            <span style={{ marginRight: "0.44rem" }}>Get Started</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Onboarding Pack">
          <a href="https://iotex.gitbook.io/iotex/vision-and-mission" target="_blank">
            Onboarding Pack
          </a>
        </Menu.Item>
        <Menu.Item key="For Developers">
          <a href="https://docs.iotex.io/" target="_blank">
            For Developers
          </a>
        </Menu.Item>
        <Menu.Item key="For Enterprise">
          <Link href="/enterprise">For Enterprise</Link>
        </Menu.Item>
        <Menu.Item key="For Delegates">
          <a href="https://community.iotex.io/t/official-iotex-delegates-thread/1263">
            For Delegates
          </a>
        </Menu.Item>
        <Menu.Item key="Invest in IOTX">
          <a href="https://iotex.io/for-investors/">Invest in IOTX</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://iotex.io/faq/">FAQ</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Resources"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>Resources</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Onboarding Pack">
          <a href="https://community.iotex.io/">Community Forum</a>
        </Menu.Item>
        <Menu.Item key="For Enterprise">
          <a href="https://docs.iotex.io/">Dev Docs</a>
        </Menu.Item>
        <Menu.Item key="Invest in IOTX">
          <a href="https://github.com/iotexproject">Github (open-source)</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://burndrop.iotex.io/">Burn-Drop</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://codelabs.iotex.io/">Codelabs</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Tools"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>Tools</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Onboarding Pack">
          <a href="https://member.iotex.io/">Staking Portal</a>
        </Menu.Item>
        <Menu.Item key="For Enterprise">
          <a href="https://iopay.iotex.io/">ioPay Wallet</a>
        </Menu.Item>
        <Menu.Item key="Invest in IOTX">
          <a href="https://iotexscan.io/">iotexscan Explorer</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://mimo.finance/">mimo DEX</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://docs.iotex.io/developer/ioctl/install.html">ioctl CLI</a>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="Foundation"
        title={
          <>
            <span style={{ marginRight: "0.44rem" }}>Foundation</span>
            <DownOutlined style={{ color: "#43C9BA" }} />
          </>
        }
      >
        <Menu.Item key="Onboarding Pack">
          <a href="https://iott.network/about">Vision</a>
        </Menu.Item>
        <Menu.Item key="For Enterprise">
          <a href="https://iotex.io/team/">Team</a>
        </Menu.Item>
        <Menu.Item key="Invest in IOTX">
          <a href="https://iotex.io/research/">Research</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://iotex.medium.com/iotex-2021-the-year-ahead-acf743e2df03">Roadmap</a>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <a href="https://iotex.medium.com/">Blog</a>
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
      marginRight: "11rem",
    },
    ".header-box": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      md: {
        justifyContent: "flex-start",
      },
      ".large-menus": {
        flex: 1,
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
