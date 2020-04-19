import gql from 'graphql-tag';

const getPost = (getFull, includeAnswers) => {
    if (getFull) {
        return gql`
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
                    },
                    questions {
                        id,
                        text,
                        choices
                        ${includeAnswers ? 'answer' : ''}
                    }
                }
            }
        `;
    }
    return gql`
        query PostById($id: ID) {
            post(id: $id) {
                id,
                title,
                description,
                language,
                creator {
                    id,
                    profile {
                      id,
                      name
                    }
                },
            }
        }
    `;
}

export default getPost;
