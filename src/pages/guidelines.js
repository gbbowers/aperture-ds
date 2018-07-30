import React from 'react'
import Link from 'gatsby-link'

const OverviewPage = () => (
  <div className="side-nav-page">
  <nav>
      <ul>
        <li>
          <Link to="guidelines/color">Color</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
      </ul>
  </nav>
  
  <main className="main-content">
    <h1>Guidelines</h1>
    <p>Content would go here. Special.</p>

    <Link to="/">Go home, Timmy.</Link>
  </main>
  </div>
)

export default OverviewPage