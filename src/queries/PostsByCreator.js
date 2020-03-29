import gql from 'graphql-tag';

export default gql`
    query PostsByCreator($creator: ID) {
        postsByCreator(creator: $creator) {
            id,
            title,
            description,
            language
        }
    }
`;
