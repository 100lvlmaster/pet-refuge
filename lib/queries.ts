import { gql } from "@apollo/client";
/// SignUp query
export const productsQuery = gql`
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

export const categoriesQuery = gql`
  query Query {
    categories {
      description
      id
      name
      mediaUrl
      updatedAt
    }
  }
`;
export const storesQuery = gql`
  query Query {
    stores {
      address
      description
      id
      name
      updatedAt
    }
  }
`;

export const productQuery = gql`
  query Query($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
      description
      discount
      mediaUrl
      createdAt
      store {
        description
        name
        address
        id
      }
    }
  }
`;

export const userCartQuery = gql`
  query Query($userId: String!) {
    userCart(id: $userId) {
      id
      createdAt
      status
    }
  }
`;
