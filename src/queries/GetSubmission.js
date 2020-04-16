import gql from 'graphql-tag';

export default gql`
    query SubmissionById($id: ID) {
        submission(id: $id) {
            id,
            score,
            submissionTime,
            post {
                id,
                title
            },
            answers {
                id,
                answer,
                isCorrect,
                question {
                    id,
                    text,
                    answer
                }
            }
        }
    }
`;
