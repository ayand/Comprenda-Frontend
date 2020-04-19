import React from 'react';

const PostBody = ({ body }) => {
    return (
        <div className="jumbotron" style={{backgroundColor: '#b3f786', border: '5px solid #4ba310', paddingTop: '25px', paddingBottom: '25px'}}>
            <div style={{ height: '440px', overflowY: 'scroll' }}>
                {body.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
            </div>
        </div>
    )
}

export default PostBody;
