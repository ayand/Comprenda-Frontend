import gql from 'graphql-tag';

export default gql`
    mutation CreateSubmission($submission: SubmissionInputType) {
        createSubmission(submission: $submission) {
            id
        }
    }
`;
