import gql from 'graphql-tag';

export default gql`
    {
        languages {
            id,
            language
        }
        currentUser {
            id
        }
    }
`;
