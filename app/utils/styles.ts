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
})
