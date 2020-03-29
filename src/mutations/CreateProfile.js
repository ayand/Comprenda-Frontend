import gql from 'graphql-tag';

export default gql`
  mutation CreateProfile($name:String, $bio:String) {
    createProfile(name:$name, bio:$bio) {
      id
      name 
      bio
    }
  }
`;
