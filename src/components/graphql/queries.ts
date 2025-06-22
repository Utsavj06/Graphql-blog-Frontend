import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
{
   blog {
     id 
     title
     user {
       name
     }
   }
}
`;