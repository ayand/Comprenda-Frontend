import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import SubmissionScore from './SubmissionScore';

class SubmissionCard extends Component {

    componentDidMount() {
        this.chart = new SubmissionScore(this.svg, this.props.submission.score, 100);
    }

    render() {
        const d = new Date(this.props.submission.submissionTime);
        return (
          <Card>
              <Card.Body>
                  <div className="row">
                      <div className="col-lg-3">
                          <svg width="100" height="100" ref={svg => this.svg = svg} />
                      </div>
                      <div className="col-lg-9">
                          <br/>
                          <Card.Title><Link to={`/submissions/${this.props.submission.id}`}>{this.props.submission.post.title}</Link></Card.Title>
                          <br/>
                          <Card.Subtitle> Submitted on {`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${(d.getMinutes() >= 10) ? d.getMinutes() : ("0" + d.getMinutes())}`}</Card.Subtitle>
                      </div>
                  </div>
              </Card.Body>
          </Card>
        )
    }
}

export default SubmissionCard;
