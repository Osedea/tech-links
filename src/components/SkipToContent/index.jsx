import React from 'react'
import { link } from './skip-to-content.module.css'

/**
 * Skip to the page's main content
 * https://a11yproject.com/posts/skip-nav-links/
 */
export default () => (
  <a className={link} href="#main">
    Skip to content
  </a>
)
