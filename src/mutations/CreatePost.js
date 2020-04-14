import gql from 'graphql-tag';

/*export default gql`
    mutation CreatePost($title: String, $body: String, $description: String, $language: String) {
        createPost(title: $title, body: $body, description: $description, language: $language) {
            id,
            title,
            body,
            description,
            language
        }
    }
`;*/

export default gql`
    mutation CreatePost($post: PostInputType) {
        createPost(post: $post) {
          id,
          title,
          body,
          description,
          language
        }
    }
`
