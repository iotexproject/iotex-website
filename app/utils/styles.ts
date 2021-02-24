import "antd/dist/antd.css"
import { css } from "app/utils/stitches.config"

export const globalStyles = {
  container: css({
    minHeight: "100vh",
  }),
}

css.global({
  ".mw-container": {
    width: "90%",
    margin: "auto",
    md: {
      maxWidth: "1200px",
      margin: "auto",
    },
  },
  ".ant-input": {
    height: "3.2rem",
    border: "none",
    borderRadius: "4px",
  },
  ".ant-menu": {
    backgroundColor: "transparent",
    color: "#43C9BA",
  },
  ".ant-menu-item:hover, .ant-menu-item-active, .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-submenu-active, .ant-menu-submenu-title:hover ": {
    color: "#43C9BA !important",
    border: "0px !important",
  },
  ".ant-menu-horizontal": {
    border: "0px !important",
  },
  ".ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected": {
    borderColor: "transparent !important",
  },
  ".ant-menu-submenu-popup": {
    borderTop: "2px solid #43C9BA !important",
  },
  ".ant-menu-submenu-popup > .ant-menu": {
    backgroundColor: "#262626",
  },
  ".ant-menu-vertical.ant-menu-sub > .ant-menu-item:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  ".ant-menu-vertical.ant-menu-sub > .ant-menu-item a": {
    color: "#43C9BA",
  },
  ".ant-dropdown-menu-submenu-title": {
    ".anticon-down": {
      display: "none",
      md: {
        display: "block",
      },
    },
  },
})
