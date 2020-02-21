import { gql } from 'apollo-server-lambda'

const typeDefs = gql`
  extend type Query {
    hello: String
  }
`

export default typeDefs
