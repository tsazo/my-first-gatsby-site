import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>just interests and thoughts... pubically</p>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>{node.parent.name}</h2>
              <p>Posted: {node.parent.modifiedTime}</p>
              <MDXRenderer>
                { node.body }
              </MDXRenderer>
            </article> 
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
            name
          }
        }
        id
        body
      }
    }
  }
`

export default BlogPage