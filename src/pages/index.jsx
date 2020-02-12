import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import slugify from 'slugify'
import ReactMarkdown from 'react-markdown'
import { GithubContext } from '@components/GithubData'

const HomePage = () => {
  const github = useContext(GithubContext)

  const categories = github.organization.repository.object.entries.find(
    e => e.name === 'Links'
  ).object.entries

  return (
    <div className="categories">
      <h1>Osedea Tech Links</h1>
      {categories.map(category => {
        const catId = slugify(category.name, { lower: true })
        return (
          <div key={catId} id={catId}>
            <h2 className="category-title">{category.name}</h2>
            <div className="grid">
              {category.object.entries.map(file => {
                const fileName = file.name.replace('.md', '')
                const fileId = slugify(fileName, {
                  lower: true
                })
                return (
                  <div className="card" key={fileId} id={fileId}>
                    <h4>{fileName}</h4>
                    <ReactMarkdown source={file.object.text} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomePage
