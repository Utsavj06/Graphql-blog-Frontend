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

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!, $date: String!, $user: ID! ) {
    addBlog(title: $title, content: $content, date: $date, user: $user) {
      title,
      content
    }
  }
`;