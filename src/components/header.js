import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"
import { header } from "../styles/header.module.css"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header>
    <div className={header}>
      <Link to="/">
        <Logo title={siteTitle} subTitle={siteSubTitle} />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
}

export default Header
