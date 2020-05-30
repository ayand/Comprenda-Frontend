import React, { Fragment } from 'react';
import query from '../../queries/CurrentUser';
import mutation from '../../mutations/Logout';
import { graphql } from 'react-apollo';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ data, mutate }) => {

    const onLogoutClick = () => {
        console.log("Log out");
        mutate({
            refetchQueries: [{ query }]
        });
    }

    const renderButtons = () => {
        const { loading, currentUser } = data;

        if (loading) {
            return <div/>;
        }
        if (currentUser) {
            return (
                <Nav className="ml-auto">
                    {currentUser.profile && (
                      <Fragment>
                          <Nav.Link href="/search">Search</Nav.Link>
                          <Nav.Link href="/create_post">Create Post</Nav.Link>
                          <Nav.Link href="/profile">My Profile</Nav.Link>
                      </Fragment>
                    )}
                    <Nav.Link onClick={onLogoutClick}>Logout</Nav.Link>
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

    return (
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Navbar.Brand href={(data.currentUser ? "/dashboard" : "/")}>Comprenda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              {renderButtons()}
          </Navbar.Collapse>
      </Navbar>
    )

}

export default graphql(query)(graphql(mutation)(Header));
