import React from 'react';

const NotAuthorized = () => {
    return (
      <div style={{textAlign: 'center', color: "#db1212"}} className="container">
          <br/>
          <div className="jumbotron">
              <h1>Sorry, but you're not authorized to visit this page!</h1>
              <br/>
              <i className="fas fa-exclamation-circle fa-10x"></i>
          </div>
      </div>
    )
}

export default NotAuthorized;
