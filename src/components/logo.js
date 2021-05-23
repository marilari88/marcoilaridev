import React from "react"
import PropTypes from "prop-types"

function Logo({ title, subTitle }) {
  return (
    <div className="logo">
      <div className="logo__title">{title}</div>
      <div className="logo__subtitle">{subTitle}</div>
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
