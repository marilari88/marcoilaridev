import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../components/logo"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header>
    <div className="header__logo">
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
