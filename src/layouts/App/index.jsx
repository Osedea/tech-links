import React from 'react'
import SEO from '@components/SEO'
import SideBar from '@components/SideBar'
import Footer from '@components/Footer'
import SkipToContent from '@components/SkipToContent'
import GithubData from '@components/GithubData'

// Global styling
import './global.css'

// Root component
export default ({ location, children }) => {
  return (
    <GithubData>
      <SEO path={location.pathname} />
      <SkipToContent />
      <div className="container">
        <SideBar />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </GithubData>
  )
}
