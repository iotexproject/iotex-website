import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import { css } from "app/utils/stitches.config"
import { Row, Col } from 'antd'

const Footer: BlitzPage = observer(() => {
  return (
    <div className={`${styles.footer}`}>
      <div className={styles.mainContainer}>
        <Row>
          <Col span={4}>
            <span>Resource</span>
            <span>Ecosystem</span>
            <span>Secure Hardware</span>
            <span>Community</span>
            <span>Research Papers</span>
            <span>Delegate Program</span>
            <span>Charity Program</span>
          </Col>
          <Col span={4}>
            <span>Develop</span>
            <span>Github</span>
            <span>Documentations</span>
            <span>Explorer</span>
            <span>Wallet</span>
            <span>Tools</span>
          </Col>
          <Col span={4}>
            <span>About Us</span>
            <span>Team</span>
            <span>Brand Ambassador</span>
            <span>Forum</span>
          </Col>
          <Col span={12}>

          </Col>
        </Row>
      </div>
    </div>
  )
})

export default Footer

const styles = {
  footer: css({
    background: "$bg2",
    height: 400,
    width: "100%",
  }),
  mainContainer: css({
    margin: "0 auto",
    maxWidth: "$mainW"
  })
}
