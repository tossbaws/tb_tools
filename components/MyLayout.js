import Header from './Header';
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import pageTheme from '../css/PageTheme.js';

const container = {
    margin: 10,
    padding: 20,
    border: '1px solid #0b7c69',
    background: '#050535',
    color: '#ffffff',
};

const Layout = props => (
    <div style={container}>
        <body style={pageTheme} />
        <Header />
        <Container>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
    </div>
);

export default Layout;
