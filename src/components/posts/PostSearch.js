import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import query from '../../queries/GetPosts';
import PostCard from '../posts/PostCard.js';

import Button from 'react-bootstrap/Button';

const PostSearch = (props) => {
    //console.log(props.match.params.search_term);
    const [index, setIndex] = useState(1);
    const [posts, setPosts] = useState([]);
    const [more, setMore] = useState(true);
    const [getPosts, { loading, data }] = useLazyQuery(query);

    useEffect(() => {
        getPosts({ variables: { searchString: props.match.params.search_term, index: 1 } })
    }, [])

    useEffect(() => {
      if (data && data.posts) {
          if (data.posts.length < 10) {
              setMore(false);
          }
          setPosts(posts.concat(data.posts));
          setIndex(index + 1);
      }
    }, [data])

    const getMorePosts = () => {
        getPosts({ variables: { searchString: props.match.params.search_term, index } })
    }

    if (loading && posts.length == 0) {
        return (
          <div style={{textAlign: 'center'}}>
              <br/>
              <h3>Loading...</h3>
          </div>
        )
    }
    return (
        <div className="container">
            <br/>
            <h3 style={{textAlign: 'center'}}>Search Results for '{props.match.params.search_term}'</h3>
            <br/>
            {posts.map((post) => <PostCard key={post.id} post={post} />)}
            <br/>
            <div style={{textAlign: 'center'}}>
                { more && <Button variant="success" onClick={() => { getMorePosts(); }}>More</Button>}
            </div>
        </div>
    )
}

export default PostSearch;
