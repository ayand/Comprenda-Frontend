import gql from 'graphql-tag';

export default gql`
    mutation AddQuestion($text: String, $answer: String, $choices: [String], $post: ID) {
        createQuestion(text: $text, answer: $answer, choices: $choices, post: $post) {
            id,
            text,
            answer,
            choices
        }
    }
`
