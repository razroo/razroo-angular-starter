import { gql } from 'graphql-tag';
import { UserFragment } from "./user.fragments";

export const User = gql`
  mutation User($firstParam: String) {
    <%= properyName %>(firstParam: $firstParam) {
      ...<%= properyName %>Fields
    }
  }
  ${UserFragment}
`;
