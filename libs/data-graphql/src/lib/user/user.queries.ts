import { gql } from 'graphql-tag';
import { UserFragment } from "./user.fragments";

export const UserQuery = gql`
	query user {
      user {
        ...userFields
      }
	}
  ${UserFragment}
`;