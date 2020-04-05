import gql from 'graphql-tag';

export default gql`
    mutation EditPost($id: ID, $title: String, $body: String, $description: String) {
        editPost(id: $id, title: $title, body: $body, description: $description) {
            id,
            title,
            body,
            description,
            language
        }
    }
`;
