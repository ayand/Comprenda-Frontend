import gql from 'graphql-tag';

export default gql`
  mutation EditProfile($name:String, $bio:String, $languages: [String]) {
    editProfile(name:$name, bio:$bio, languages: $languages) {
      id
      name
      bio,
      languages
    }
  }
`;
