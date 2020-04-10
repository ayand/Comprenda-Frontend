import gql from 'graphql-tag';

export default gql`
  {
    currentUser {
      id,
      profile {
        id
        name,
        bio,
        languages
      }
    }
  }
`;
