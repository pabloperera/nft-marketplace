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
import { Card, Col, Container, Row, Navbar, Nav, Carousel} from "react-bootstrap";
import "./static/styles/App.css";
import "./static/styles/style.scss";
import { SocialIcon } from 'react-social-icons';

const App = () => {
  const [collectionUrl, setCollectionUrl] = useState("");
  useEffect(() => {
    // console.log("resizing");
  });

  return (
    <div className="App">
      <header className="App-header-div">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Container>
          <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
          </Nav>
            <Nav>
            <Nav.Link href="https://figandgrape.io/">Home |</Nav.Link>
              <Nav.Link href="https://figandgrape.io/landing/wp-content/uploads/Fig-Grape-whitepaper-en.pdf">Whitepaper |</Nav.Link>
              <Nav.Link href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft">Contact Us |</Nav.Link>
   
            <a href="https://presale.figandgrape.io/"><button className="App-buy-button" > {'>'} BUY FIG TOKEN {'<'} </button></a>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
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
        
        {/* card 1 */}
        <div className="App-card-new"> 
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="https://nft.figandgrape.io">
            <img className="postcard__img" src="https://i.ibb.co/PFvFnjr/arboreum56.jpg" alt="Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue"><a href="https://nft.figandgrape.io">Arboreum</a></h1>
            <div className="postcard__subtitle small">
              {/* <time datetime="2020-05-25 12:00:00"> */}
              <time>
                <i className="fas fa-calendar-alt mr-2"></i>Realease on Sat, Feb 2th 2022
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
            Desde su juventud ha sido una persona inquieta a la que le han interesado las disciplinas que, de alguna forma, pudieran ayudar al encuentro de la paz interior de las personas, teniendo siempre la naturaleza arbórea como fuente de inspiración de sus obras dentro del proyecto Zensations & Arbóreum.              </div>
            <ul className="postcard__tagbox">
              <li className="tag__item"><i className="fas fa-tag mr-2"></i>Albert Cuevas</li>
              <li className="tag__item"><i className="fas fa-clock mr-2"></i>20 NFTs</li>
              <li className="tag__item play blue">
                <a href="https://nft.figandgrape.io"><i className="fas fa-play mr-2"></i>Watch Collection</a>
              </li>
            </ul>
          </div>
          <a className="postcard__img_link" href="https://nft.figandgrape.io">
            <img className="postcard__img" src="https://i.ibb.co/R72XnBM/beto-logo.jpg" alt="Title" />
          </a>
        </article>
        </div>

        <div className="App-espacio-inter"></div>

        {/* card 2 */}
        <div className="App-card-new"> 
              <article className="postcard dark red">
            <a className="postcard__img_link" href="https://nft.figandgrape.io">
              <img className="postcard__img" src="https://i.ibb.co/8xXxYGs/carlos-marin-02.jpg" alt="Title" />	
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red"><a href="https://nft.figandgrape.io">Carlos Marín</a></h1>
              <div className="postcard__subtitle small">
                <time>
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                <li className="tag__item play red">
                  <a href="https://nft.figandgrape.io"><i className="fas fa-play mr-2"></i>Play Episode</a>
                </li>
              </ul>
            </div>
            <a className="postcard__img_link" href="https://nft.figandgrape.io">
              <img className="postcard__img" src="https://phantom-marca.unidadeditorial.es/0b06d605e943e75388f9264e7479ee40/resize/660/f/webp/assets/multimedia/imagenes/2021/12/17/16397178132444.jpg" alt="Title" />	
            </a>
          </article>
        </div>
       {/* card 3 */}
       <div className="App-card-new"> 
       <article className="postcard dark green">
			<a className="postcard__img_link" href="https://nft.figandgrape.io">
				<img className="postcard__img" src="https://i.ibb.co/SQbPw0s/pipanths-banner1.jpg" alt="Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title green"><a href="https://nft.figandgrape.io">Pipaths</a></h1>
				<div className="postcard__subtitle small">
					<time>
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play green">
						<a href="https://nft.figandgrape.io"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
      <a className="postcard__img_link" href="https://nft.figandgrape.io">
				<img className="postcard__img" src="      https://i.ibb.co/prp838h/pipanthsap-Mesa-de-trabajo-1.png" alt="Title" />
			</a>
		</article>
       </div>
       {/* card 4 */}
       <div className="App-card-new"> 
       <article className="postcard dark yellow">
			<a className="postcard__img_link" href="https://nft.figandgrape.io">
				<img className="postcard__img" src="https://i.ibb.co/BKgFyTN/Captura.jpg" alt="Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title yellow"><a href="https://nft.figandgrape.io">Gonzalo</a></h1>
				<div className="postcard__subtitle small">
					<time>
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play yellow">
						<a href="https://nft.figandgrape.io"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
      <a className="postcard__img_link" href="https://nft.figandgrape.io">
				<img className="postcard__img" src="https://i.ibb.co/cJjDXVT/Captura2.jpg" alt="Title" />
			</a>
		</article>
       </div>
        {/* card 5 */}
        {/* <div className="App-card-new"> 
        <article className="postcard light blue">
			<a className="postcard__img_link" href="https://nft.figandgrape.io">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a href="https://nft.figandgrape.io">Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time>
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play blue">
						<a href="https://nft.figandgrape.io"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
        </div> */}

        {/* <div className="App-content-format">
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
        </div> */}

        
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
                <p>NFT stands for Non Fungible Token. They are digital assets that represent a wide range of unique tangible and intangible items. Almost anything can be an NFT: from collectible sport cards or artwork to virtual real estate; music, photos, movies.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="App-carousel-frame"
                src={fondoSlider}
                height={"400px"}
                width={"800px"}
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
            <Col sm={4}>
                  <img
                  className="App-logo-footer"
                  src={logofooter}
                  alt="logo-footer"
                  />
            </Col>
            <Col sm={4}>
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
            <Col sm={4}>
              <a href="https://presale.figandgrape.io/"><button className="App-buy-button-footer"> {'>'} BUY FIG TOKEN {'<'} </button></a>
            </Col>
          </Row>
        </Container>
        <h6 className="App-copyright">Copyright © 2022 Fig & Grape</h6>
      </footer>
    </div>
  );
};

export default App;
