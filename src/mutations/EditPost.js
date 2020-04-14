import gql from 'graphql-tag';

export default gql`
    mutation EditPost($post: PostInputType) {
        editPost(post: $post) {
            id,
            title,
            body,
            description,
            language
        }
    }
`;
