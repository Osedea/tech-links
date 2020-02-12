import React from 'react'
import { Link } from 'gatsby'
import SEO from '@components/SEO'

export default () => (
  <>
    <SEO title="Page not found." />
    <h1>404.</h1>
    <h4>Page not found.</h4>
    <Link to="/">Go back home</Link>
  </>
)
