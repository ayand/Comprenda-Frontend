import gql from 'graphql-tag';

export default gql`
  mutation CreateProfile($name:String, $bio:String, $languages: [String]) {
    createProfile(name:$name, bio:$bio, languages: $languages) {
      id
      name
      bio,
      languages
    }
  }
`;
