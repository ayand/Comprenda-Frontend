import gql from 'graphql-tag';

export default gql`
    query OneProfile($id: ID) {
        profile(id: $id) {
          id,
          name,
          bio
        }
    }
`
