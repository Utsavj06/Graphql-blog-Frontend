import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
mutation RegisterUser($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    id
    name
    email
  }
}
`
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;