import React from "react"
import { useRouter } from "next/router"
import { Menu } from "antd"
import { observer, useLocalObservable, useObserver } from "mobx-react-lite"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "blitz"
import { css } from "../utils/stitches.config"
import { useStore } from "../stores"

const { SubMenu } = Menu

export const Header = observer((props) => {
  const router = useRouter()
  const { lang } = useStore()

  return (
    <div className={styles.commonHeader}>
      <div className="mw-container m-auto flex items-center">
        <Link href="/">
          <img className="logo" src="/images/logo_iotex.png" alt="" />
        </Link>
        <div className="ml-10">
          <Menu selectedKeys={["mail"]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
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
  }),
}
