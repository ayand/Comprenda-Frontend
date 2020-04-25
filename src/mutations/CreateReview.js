import gql from 'graphql-tag';

export default gql`
    mutation CreateReview($rating: Int, $text: String, $post: ID) {
        postReview(rating: $rating, text: $text, post: $post) {
            id
        }
    }
`;
