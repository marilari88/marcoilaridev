import React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/logo.module.css"

function Logo({ title, subTitle }) {
  console.log(styles)
  return (
    <div className={styles.logo}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subTitle}</div>
    </div>
  )
}

Logo.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

Logo.defaultProps = {
  title: ``,
  siteSubTitle: ``,
}
export default Logo
