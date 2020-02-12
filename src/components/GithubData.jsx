import React, { createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const GithubContext = createContext(null)

const GithubData = ({ children }) => {
  const data = useStaticQuery(githubQuery)
  return (
    <GithubContext.Provider value={data.github}>
      {children}
    </GithubContext.Provider>
  )
}

export const githubQuery = graphql`
  {
    github {
      organization(login: "Osedea") {
        repository(name: "tech-links") {
          name
          description
          url
          object(expression: "master:") {
            ... on GitHub_Tree {
              id
              entries {
                name
                object {
                  ... on GitHub_Tree {
                    id
                    entries {
                      name
                      object {
                        ... on GitHub_Tree {
                          id
                          entries {
                            name
                            object {
                              ... on GitHub_Blob {
                                id
                                text
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default GithubData
