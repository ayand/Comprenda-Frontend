import React, { Fragment } from 'react';
import SearchForm from '../forms/SearchForm';

const Search = () => {
  const entities = ["Posts", "Profiles"];
  console.log("Rendering search");
  return (
    <div className="container">
        <br/>
        <h3 style={{textAlign: 'center'}}>Search</h3>
        <br/>
        {entities.map((entity, i) => (
          <Fragment key={i}>
              <SearchForm entity={entity}/>
              <br/>
          </Fragment>
        ))}
    </div>
  )
}

export default Search;
