import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../../mutations/CreateReview';
import query from '../../queries/GetReviews';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class PostReview extends Component {

    constructor(props) {
        super(props);
        this.state = { rating: 0, text: "", errors: [] };
    }

    onSubmit(event) {
        const post = this.props.id;
        const { rating, text } = this.state;
        event.preventDefault();
        console.log(this.state);
        this.props.mutate({
            variables: { rating, text, post }
        })
        .then(() => { console.log("Success!"); this.setState({ rating: 0, text: "" }) })
        .catch(res => {
            if (res.graphQLErrors) {
                const errors = res.graphQLErrors.map(err => err.message);
                console.log(errors);
                this.setState({ errors })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h5 style={{textAlign: 'center'}}>Post a Review</h5>
                <br/>
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <h6>Rating</h6>
                    <Rater rating={this.state.rating} interactive={true} onRate={({ rating }) => { this.setState({ rating }) }}/>
                    <br/>
                    <br/>
                    <h6>Text</h6>
                    <Form.Control as="textarea" rows="5" placeholder="Review Text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}/>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="success" type="submit">Submit</Button>
                    </div>
                </Form>

                <br/>
            </div>
        );
    }
}

export default graphql(mutation)(PostReview);
