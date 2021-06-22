import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from "./navigation"

import * as styles from "../styles/footer.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
          email
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteSubTitle={data.site.siteMetadata.subTitle}
      />
      <Navigation />
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className="email">{data.site.siteMetadata.email}</div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
