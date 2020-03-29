import gql from 'graphql-tag';

export default gql`
  {
    currentUser {
      id
      email,
      profile {
        id,
        name,
        bio
      }
    }
  }
`;
