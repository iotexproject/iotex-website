import { AppProps } from "blitz"
import { useEffect } from "react"
import { useStore } from "app/stores"
import { css } from "app/utils/stitches.config"
import "antd/dist/antd.css"

css.global({
  body: {
    margin: 0,
  },
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const { lang } = useStore()
  useEffect(() => {
    lang.init()
  }, [])
  return <Component {...pageProps} />
}
