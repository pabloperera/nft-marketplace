import React from "react";
import { iframeResizer } from "iframe-resizer";
import { Card, Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import logo from "./static/images/fig-grape-logo-bl-200x27.png";
import { SocialIcon } from 'react-social-icons';
import logofooter from "./static/images/logo-footer.png";


const Collection= (link) => {
    return (
        <>
            <header className="App-header-div">
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://figandgrape.io/">Home |</Nav.Link>
                            <Nav.Link href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft">Contact Us |</Nav.Link>

                            <a href="https://presale.figandgrape.io/"><button className="App-buy-button"> {'>'} BUY FIG TOKEN {'<'} </button></a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        <div>
                LA COLECCION
                <div style={{ height: "2000px", position: "relative" }}>
                    <div className="App-iframe-os"></div>
                    <iframe
                        id="opensea-iframe"
                        title="Embedded OpenSea Marketplace"
                        //   src={`${collectionUrl}?embed=true`}
                        // src={`${`https://opensea.io/collection/carlos-marin-test`}?embed=true`}
                        src={`${link.headline}?embed=true`}
                        width="100%"
                        height="2000px"
                        frameBorder="0" s
                        allowFullScreen
                        onLoad={() => iframeResizer({ log: false }, "#opensea-iframe")}
                    ></iframe>
                </div>
            </div>
        <div>
            <footer className="App-footer">
                <Container>
                    <Row>
                    <Col sm={4}>
                        <img
                        className="App-logo-footer"
                        src={logofooter}
                        alt="logo-footer" />
                    </Col>
                    <Col sm={4}>
                        <Row>
                        <Row>
                            <h4 className="App-follow">follow us</h4>
                        </Row>
                        <Col>
                            <SocialIcon url="https://discord.gg/yypTqyrqaN" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://telegram.me/figandgrape" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://www.instagram.com/figandgrape.io/" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://twitter.com/figandgrapeio" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://www.facebook.com/FigandGrape.io" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://www.linkedin.com/company/fig-and-grape" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="https://www.youtube.com/channel/UCM5yb6lCTRCwaY3DOUElTSw" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        <Col>
                            <SocialIcon url="mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20landing" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
                        </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <a href="https://presale.figandgrape.io/"><button className="App-buy-button-footer"> {'>'} BUY FIG TOKEN {'<'} </button></a>
                    </Col>
                    </Row>
                    <Row>
                        <div style={{alignItems: "center"}}>
                    <h6 className="App-copyright">Copyright © 2022 Fig & Grape</h6>
                        </div>
                    </Row>
                </Container>

            </footer>
        </div>
        </>
    )
}

export default Collection