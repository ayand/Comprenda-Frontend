import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/GetPost';

class Post extends Component {

    render() {
        if (!this.props.data.post) {
            return <div>Loading...</div>
        }
        console.log(this.props.data);
        const { title, creator, body, description } = this.props.data.post;
        return (
          <div>
              <br/>
              <h3 style={{textAlign: 'center'}}>{title}</h3>
              <h5 style={{textAlign: 'center'}}>{creator.profile.name}</h5>
              <br/>
              <div className="container">
                  <h4>Description</h4>
                  <p>{description}</p>
                  <h4>Story</h4>
                  <br/>
                  {body.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
              </div>
          </div>
        )
    }

}

export default graphql(query, {
  options: (props) => { console.log(props); return { variables: { id: props.match.params.id } } }
})(Post);
