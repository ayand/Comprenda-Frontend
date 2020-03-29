import gql from 'graphql-tag';

export default gql`
  mutation EditProfile($name:String, $bio:String) {
    editProfile(name:$name, bio:$bio) {
      id
      name
      bio
    }
  }
`;
