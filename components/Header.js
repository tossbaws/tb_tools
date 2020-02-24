import Link from 'next/link';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const linkStyle = {
    marginRight: 15,
    color: "#70d3ce",
};

// Single param for edge case button group. Makes the rounded edges go away.
const buttonStyle = {
    borderRadius: "0px",
}

const Header = () => (
    <Container>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Row>
            <Col>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="alphabet" size="sm">
                        <Button variant="secondary" href="/a/1" style={buttonStyle}>A</Button>
                        <Button variant="secondary" href="/b/1">B</Button>
                        <Button variant="secondary" href="/c/1">C</Button>
                        <Button variant="secondary" href="/d/1">D</Button>
                        <Button variant="secondary" href="/e/1">E</Button>
                        <Button variant="secondary" href="/f/1">F</Button>
                        <Button variant="secondary" href="/g/1">G</Button>
                        <Button variant="secondary" href="/h/1">H</Button>
                        <Button variant="secondary" href="/i/1">I</Button>
                        <Button variant="secondary" href="/j/1">J</Button>
                        <Button variant="secondary" href="/k/1">K</Button>
                        <Button variant="secondary" href="/l/1">L</Button>
                        <Button variant="secondary" href="/m/1">M</Button>
                        <Button variant="secondary" href="/n/1">N</Button>
                        <Button variant="secondary" href="/o/1">O</Button>
                        <Button variant="secondary" href="/p/1">P</Button>
                        <Button variant="secondary" href="/q/1">Q</Button>
                        <Button variant="secondary" href="/r/1">R</Button>
                        <Button variant="secondary" href="/s/1">S</Button>
                        <Button variant="secondary" href="/t/1">T</Button>
                        <Button variant="secondary" href="/u/1">U</Button>
                        <Button variant="secondary" href="/v/1">V</Button>
                        <Button variant="secondary" href="/w/1">W</Button>
                        <Button variant="secondary" href="/x/1">X</Button>
                        <Button variant="secondary" href="/y/1">Y</Button>
                        <Button variant="secondary" href="/z/1" style={buttonStyle}>Z</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>
        </Row>
    </Container>
);

export default Header;
