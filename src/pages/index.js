import * as React from "react"

import Layout from "../components/layout"
import ProjectList from "../components/projectList"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ProjectList />
  </Layout>
)

export default IndexPage
