import { SignUpInput } from "lib/types";
import { gql } from "@apollo/client";
/// SignUp query
export const signUpMutation = gql`
  mutation SignupMutation($signupData: SignupInput!) {
    signup(data: $signupData) {
      refreshToken
      accessToken
      user {
        id
        email
        firstname
        lastname
      }
    }
  }
`;
export const signInMutation = gql`
  mutation Mutation($loginData: LoginInput!) {
    login(data: $loginData) {
      accessToken
      refreshToken
      user {
        firstname
        email
        id
        lastname
        createdAt
      }
    }
  }
`;

export const createCartMutation = gql`
  mutation Mutation($createCartInput: CreateCartInput!) {
    createCart(createCartInput: $createCartInput) {
      id
      product {
        id
        name
        description
        price
        discount
      }
    }
  }
`;
