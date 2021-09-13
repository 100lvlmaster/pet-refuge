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
        id
        firstname
        lastname
        role
        email
        lastname
        createdAt
      }
    }
  }
`;

export const createOrderMutation = gql`
  mutation CreateOrderMutation($orderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $orderInput) {
      id
      userId
      quantity
      productId
    }
  }
`;
