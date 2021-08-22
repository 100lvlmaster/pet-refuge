import { SignUpInput } from "lib/types";
import { gql } from "@apollo/client";
/// SignUp query
const signUpMutation = (input: SignUpInput) => gql`
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
