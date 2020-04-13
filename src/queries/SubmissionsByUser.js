import gql from 'graphql-tag';

export default gql`
    query SubmissionsByUser($user: ID) {
        submissionsByUser(user: $user) {
            id,
            score,
            submissionTime,
            post {
                id,
                title
            }
        }
    }
`;
