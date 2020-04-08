import gql from 'graphql-tag';

export default gql`
    query GetPosts($searchString: String, $index: Int) {
        posts(searchString: $searchString, index: $index) {
        		id,
        		title,
        		description,
            language
      	}
    }
`
