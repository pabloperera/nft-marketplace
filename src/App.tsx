import React, { useEffect, useState, } from "react";
import { options } from "./constants";
import fondoSlider from "./static/images/fondo-slider.png";
import logo from "./static/images/fig-grape-logo-bl-200x27.png";
import comingsoon1 from "./static/images/coming-soon-3d.gif";
import comingsoon2 from "./static/images/coming-soon-art.gif";
import comingsoon3 from "./static/images/coming-soon-games.gif";
import neon from "./static/images/neon-faq-01-150x150.png";
import logofooter from "./static/images/logo-footer.png";
import { iframeResizer } from "iframe-resizer";
import { Card, Col, Container, Row, Navbar, Nav, NavDropdown, Carousel} from "react-bootstrap";
import "./static/styles/App.css";
import { SocialIcon } from 'react-social-icons';

const App = () => {
  const [collectionUrl, setCollectionUrl] = useState("");
  useEffect(() => {
    // console.log("resizing");
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <div className="App-logo-titulo">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <div className="App-menu">
           <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="https://figandgrape.io/">Home |</Nav.Link>
                    <Nav.Link href="#pricing">NFTs Creators |</Nav.Link>
                    <Nav.Link href="#pricing">Whitepaper |</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us |</Nav.Link>
                    <Nav.Link href="#pricing">FAQ |</Nav.Link>
                    <button className="App-buy-button"> {'>'} BUY FIG TOKEN {'<'} </button>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav> */}
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="App-bg-grape-background">
          <Container>
            <Row>
              <Col>
                <div className="App-texto-1">
                  Discover our exclusive collection of NFTs
                </div>
                <div className="App-texto-2">
                  International artists, VIP celebrities and the most varied collection of top-notch creators that you won’t want to miss.
                </div>
              </Col>
              <Col>
                <div className="App-cubo-hero-2-image">
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <h1 className="App-titulo-intermedio">Exclusive collections</h1>
        <div className="App-content-format">
          {collectionUrl === "" ? (
            <Container>
              <Row>
                {options.map((el) => {
                  return (
                    <Col
                      md={el.title.match(/Carlos Marín|Albert Cuevas|Pipanths/gi) ? 12 : 6}
                      style={{ margin: "20px 0px" }}
                    >
                      <Card
                        onClick={() => {
                          // setOpenModal(true);D
                          setCollectionUrl(el.collectionUrl);
                        }}
                      >
                        <div
                          style={{
                            alignItems: "flex-end",
                            display: "flex",
                            justifyContent: "center",
                            background: `url(${el.imageUrl})`,
                            backgroundPosition: el.backgroundPosition || "auto",
                            backgroundSize: el.backgroundSize,                            
                            height: "300px",
                            backgroundRepeat: "no-repeat",                           
                          }}
                        >
                          <span
                            style={{
                              fontSize: "25px",
                              fontWeight: 800,
                              textShadow: "-2px 2px black",
                              color: "white",
                            }}
                          >
                            {el.title}
                          </span>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          ) : (
              <div style={{height: "2000px", position: "relative"}}>
                <div className="App-iframe-os"></div>
                <iframe
                  id="opensea-iframe"
                  title="Embedded OpenSea Marketplace"
                  src={`${collectionUrl}?embed=true`}
                  width="100%"
                  height="2000px"
                  frameBorder="0"
                  allowFullScreen
                  onLoad={() => iframeResizer({ log: false }, "#opensea-iframe")}
                ></iframe>
              </div>
          )}
        </div>
        <div className="App-coming-soon">
          <h1 className="App-titulo-intermedio">Coming soon</h1>
          <Container>
            <Row>
              <Col>
              <img src={comingsoon1} alt="cms1" />
              </Col>
              <Col>
              <img src={comingsoon2} alt="cms1" />
              </Col>
              <Col>
              <img src={comingsoon3} alt="cms1" />
              </Col>
            </Row>
         </Container>
       </div>
       <div className="App-bg-creators-background">
          <Container>
            <Row>
              <Col>
                <div className="App-texto-3">
                How to become an NFT creator on Fig&Grape?
                </div>
                <div className="App-texto-2">
                We are recruiting the best for the Fig&Grape Marketplace. It will be a unique opportunity that will allow you to be surrounded by great figures in the artistic field and VIP celebrities.                </div>
              </Col>
              <Col>
                <div className="App-creators-image">
                </div>
              </Col>
            </Row>
          </Container>
        </div>
       <div className="App-carousel">
        <Container>
          <Carousel interval={10000}>
            <Carousel.Item>
              <img
                className="App-carousel-frame"
                src={fondoSlider}
                height={"400px"}
                width={"800px"}
                alt="First slide"
              />
              <Carousel.Caption>
                    <img
                      src={neon}
                      height={"150px"}
                      width={"150px"}
                      alt="neon"
                   />
                    <h3 className="App-texto-question">What is Grape NFT Marketplace?</h3>
                    <p>Grape NFT Marketplace brings together international artists, VIP celebrities and the bests creators on a single platform to buy and sell premium and exclusive NFTs, and even create them in version 2.0!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="App-carousel-frame"
                src={fondoSlider}
                height={"400px"}
                width={"800px"}
                alt="Second slide"
              />

              <Carousel.Caption>
                <img
                  src={neon}
                  height={"150px"}
                  width={"150px"}
                  alt="neon"
                />
                <h3 className="App-texto-question">What is a non-fungible token (NFT)?</h3>
                <p>NFT stands for Non Fungible Token. They are digital assets that represent a wide range of unique tangible and intangible items. Almost anything can be an NFT: from collectible sport cards or artwork to virtual real estate; music, photos, movies, the universe of possibilities is infinite.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="App-carousel-frame"
                src={fondoSlider}
                alt="Third slide"
              />

              <Carousel.Caption>
                <img
                  src={neon}
                  height={"150px"}
                  width={"150px"}
                  alt="neon"
                />
                <h3 className="App-texto-question">How do I buy an NFT?</h3>
                <p>Very soon you will be able to carry out transactions as well as access digital assets of international creators and artists.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        </div>
      </main>
      <footer className="App-footer">
        <Container>
          <Row>
            <Col>
                  <img
                  className="App-logo-footer"
                  src={logofooter}
                  alt="logo-footer"
                  />
            </Col>
            <Col>
              <Row>
                <Row>
                  <h4 className="App-follow">follow us</h4>
                </Row>
                    <Col>
                    <SocialIcon url="https://discord.gg/yypTqyrqaN" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://telegram.me/figandgrape" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://www.instagram.com/figandgrape.io/" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://twitter.com/figandgrapeio" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://www.facebook.com/FigandGrape.io" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://www.linkedin.com/company/fig-and-grape" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="https://www.youtube.com/channel/UCM5yb6lCTRCwaY3DOUElTSw" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
                    <Col>
                    <SocialIcon url="mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20landing" bgColor="black"  fgColor="white"style={{ height: 30, width: 30 }}/>
                    </Col>
              </Row>
            </Col>
            <Col>
              <button className="App-buy-button"> {'>'}{'>'} BUY FIG TOKEN {'<'}{'<'} </button>
            </Col>
          </Row>
        </Container>
        <h6 className="App-copyright">Copyright © 2022 Fig & Grape</h6>
      </footer>
    </div>
  );
};

export default App;
