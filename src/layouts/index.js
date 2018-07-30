import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../scss/index.scss'
import Header from '../components/header'
import SideNav from '../components/SideNav'


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
    
    {/* <SideNav text='testing' /> */}
    
      {children()}
    

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
