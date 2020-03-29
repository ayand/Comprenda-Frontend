import React, { Component } from 'react';
import query from '../../queries/CurrentUser';
import mutation from '../../mutations/Logout';
import { graphql } from 'react-apollo';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {

    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }

    renderButtons() {
        const { loading, currentUser } = this.props.data;

        if (loading) {
            return <div/>;
        }
        if (currentUser) {
            return (
                <Nav className="ml-auto">
                    {currentUser.profile && <Nav.Link href="/profile">My Profile</Nav.Link>}
                    <Nav.Link onClick={this.onLogoutClick.bind(this)}>Logout</Nav.Link>
                </Nav>
            )
        }
        return (
          <Nav className="ml-auto">
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        )
    }

    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
              <Navbar.Brand href={(this.props.data.currentUser ? "/dashboard" : "/")}>Comprenda</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  {this.renderButtons()}
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default graphql(query)(graphql(mutation)(Header));
