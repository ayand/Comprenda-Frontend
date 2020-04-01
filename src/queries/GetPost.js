import gql from 'graphql-tag';

export default gql`
    query PostById($id: ID) {
        post(id: $id) {
            id,
            title,
            body,
            description,
            language,
            creator {
                id,
                profile {
                  id,
                  name
                }
            }
        }
        currentUser {
            id
        }
    }
`;
