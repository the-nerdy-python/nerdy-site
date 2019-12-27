import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Nerdy Python"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `snakes`, `ball python`, `pythons`]}
        />
        <img style={{ margin: 0 }} src="./logo.png" alt="Nerdy Python" />
        <h1>
          Welcome To The Site{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>More coming soon...</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
