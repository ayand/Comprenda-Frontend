import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import query from '../../queries/GetProfiles';
import ProfileCard from './ProfileCard';

import Button from 'react-bootstrap/Button';

const ProfileSearch = (props) => {
    //console.log(props.match.params.search_term);
    const [index, setIndex] = useState(1);
    const [profiles, setProfiles] = useState([]);
    const [more, setMore] = useState(true);
    const [getProfiles, { loading, data }] = useLazyQuery(query);

    useEffect(() => {
        getProfiles({ variables: { searchString: props.match.params.search_term, index: 1 } })
    }, [])

    useEffect(() => {
      if (data && data.profiles) {
          if (data.profiles.length < 10) {
              setMore(false);
          }
          setProfiles(profiles.concat(data.profiles));
          setIndex(index + 1);
      }
    }, [data])

    const getMoreProfiles = () => {
        getProfiles({ variables: { searchString: props.match.params.search_term, index } })
    }

    if (loading && profiles.length === 0) {
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
            {profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)}
            <br/>
            <div style={{textAlign: 'center'}}>
                { more && <Button variant="success" onClick={() => { getMoreProfiles(); }}>More</Button>}
            </div>
        </div>
    )
}

export default ProfileSearch;
