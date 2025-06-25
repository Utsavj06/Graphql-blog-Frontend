import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
{
  blogs{
    title
    date
    content
    user {
      name
      id
      email
    }
  }
}
`;