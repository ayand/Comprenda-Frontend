import React, { Fragment, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import query from '../../queries/GetReviews';
import ReviewCard from './ReviewCard';

import Button from 'react-bootstrap/Button';

const ReviewList = (props) => {
    const [index, setIndex] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [more, setMore] = useState(true);
    const [getReviews, { loading, data }] = useLazyQuery(query);

    useEffect(() => {
        getReviews({ variables: { id: props.id, index: 1 } })
    }, []);

    useEffect(() => {
      if (data && data.reviewsByPost) {
          if (data.reviewsByPost.length < 10) {
              setMore(false);
          }
          setReviews(reviews.concat(data.reviewsByPost));
          setIndex(index + 1);
      }
    }, [data]);

    const getMoreReviews = () => {
        getReviews({ variables: { id: props.id, index } })
    }

    return (
        <Fragment>
            <h4 style={{textAlign: 'center'}}>Reviews</h4>
            <br/>
            {reviews.length > 0 && reviews.map((review) => {
                return (
                  <ReviewCard key={review.id} review={review}/>
                )
            })}
            <br/>
            <div style={{textAlign: 'center'}}>
                { more && <Button variant="success" onClick={() => { getMoreReviews(); }}>More</Button>}
            </div>
        </Fragment>
    )
}

export default ReviewList;
