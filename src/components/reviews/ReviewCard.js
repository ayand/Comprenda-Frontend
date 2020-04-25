import React, { Component, Fragment } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class ReviewCard extends Component {
    render() {
        const { rating, text, author } = this.props.review;
        return (
          <Fragment>
              <div>
                  <h4>{author.profile.name}</h4>
                  <Rater rating={rating} interactive={false}/>
                  <br/>
                  <br/>
                  {text.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
              </div>
              <br/>
          </Fragment>
        )
    }
}

export default ReviewCard;
