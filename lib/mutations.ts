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
