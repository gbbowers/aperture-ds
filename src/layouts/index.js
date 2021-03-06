import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "prismjs/themes/prism.css";
import '../scss/index.scss'
import Header from '../components/header'




const Layout = ({ children, data }) => (
  <div className="Page">
    
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />
    
    <div className="Sidebar">
      Sidebar content!
    </div>
   
    
    <div className="Main">
      {children()}
    </div>

    <footer className="Footer">Footer</footer>

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
