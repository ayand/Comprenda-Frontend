import gql from 'graphql-tag';

export default gql`
    query GetProfiles($searchString: String, $index: Int) {
        profiles(searchString: $searchString, index: $index) {
            id,
            name,
            languages,
            user {
              id
            }
        }
    }
`;
