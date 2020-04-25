import gql from 'graphql-tag';

export default gql`
    query GetReviews($id: ID, $index: Int) {
        reviewsByPost(post: $id, page: $index) {
          id,
          rating,
          text,
          author {
            id,
            profile {
              id,
              name
            }
          }
      	}
    }
`
