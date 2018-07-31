import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Aperture Design System</h1>
    <p>This is a hackathon project to create a design system documentation site that can ingest Markdown files as content.</p>
    <Link to="/guidelines/writing/datetime">DateTime Markdown page</Link>
  </div>
)

export default IndexPage
