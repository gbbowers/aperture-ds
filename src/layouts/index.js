import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../scss/index.scss'
import Header from '../components/header'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    
    <div className="page-content">
      {children()}
    </div>

    <div className="Footer">Footer</div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
