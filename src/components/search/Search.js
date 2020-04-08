import React, { Component, Fragment } from 'react';
import SearchForm from '../forms/SearchForm';

class Search extends Component {
    render() {
        const entities = ["Posts"];
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
}

export default Search;
