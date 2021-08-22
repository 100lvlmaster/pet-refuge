import { gql } from "@apollo/client";
/// SignUp query
const productsQuery = gql`
  query Query {
    products {
      id
      mediaUrl
      name
      discount
      description
      price
    }
  }
`;
