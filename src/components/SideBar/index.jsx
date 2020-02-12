import React, { useContext } from 'react'
import slugify from 'slugify'
import { GithubContext } from '@components/GithubData'

import { sticky, sidebar } from './sidebar.module.css'

const SideBar = () => {
  const github = useContext(GithubContext)

  const categories = github.organization.repository.object.entries.find(
    e => e.name === 'Links'
  ).object.entries

  return (
    <div className={sticky}>
      <aside className={sidebar}>
        <nav>
          <ul>
            {categories.map(category => {
              const catId = slugify(category.name, { lower: true })
              return (
                <li key={catId}>
                  <a href={`#${catId}`}>{category.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default SideBar
