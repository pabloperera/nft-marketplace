import React, { useEffect, useState, Component } from "react";
import { Button, Stack, Container, Flex, HStack } from "@chakra-ui/react";
import { options } from "./constants";
import fondoSlider from "./static/images/fondo-slider.png";
import logo from "./static/images/fig-grape-logo-bl-200x27.png";
import comingsoon1 from "./static/images/coming-soon-3d.gif";
import comingsoon2 from "./static/images/coming-soon-art.gif";
import comingsoon3 from "./static/images/coming-soon-games.gif";
import neon from "./static/images/neon-faq-01-150x150.png";
import logofooter from "./static/images/logo-footer.png";
import { iframeResizer } from "iframe-resizer";
import {
  Col,
  Row,
  Navbar,
  Nav,
  Carousel,
  Modal,
  ModalProps,
} from "react-bootstrap";
// import "./static/styles/App.css";
import "./static/styles/style.scss";
import { SocialIcon } from "react-social-icons";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Collection from "./Collection";
import { setConstantValue } from "typescript";
import { WithSubnavigation } from "./static/components/Navbar";
import Card from "./static/components/Card";
import CardFig from "./static/components/CardFig";
import CardCarlos from "./static/components/CardCarlos";
import CardAlbert from "./static/components/CardAlbert";
import CardGonzalo from "./static/components/CardGonzalo";
import CardPipanths from "./static/components/CardPipanths";
import fondo from "./static/images/grape-bg10.jpg";

export const Refactor = () => {
  const [collectionUrl, setCollectionUrl] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  useEffect(() => {
    // console.log("resizing");
  });

  return (
    <Stack bgImage={fondo} maxW={"full"} w="full" bgRepeat={"repeat-y"}>
      <WithSubnavigation />
      
      <CardFig />
      <HStack justify={"center"} spacing={8}>
        <CardGonzalo/>
        <CardCarlos />
        <CardAlbert />
        <CardPipanths/>
      </HStack>
    </Stack>
  );
};

//     <><Router>
//       <div>
//         <Switch>
//           <Route path="/collection">
//             <Collection headline ={collectionUrl}/>
//           </Route>
//           <Route path="/" exact>
//           <div className="App">
//         <header className="App-header-div">
//           <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
//             <Container>
//               <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                 </Nav>
//                 <Nav>
//                   <Nav.Link href="https://figandgrape.io/"><Button className={'App-buy-button'}  > Home </Button></Nav.Link>
//                   <Nav.Link href="https://figandgrape.io/"><Button className={'App-buy-button'}>Categories</Button></Nav.Link>
//                   <Nav.Link href="https://figandgrape.io/"><Button className={'App-buy-button'}>Artists</Button></Nav.Link>
//                   <Nav.Link href="https://figandgrape.io/"><Button className={'App-buy-button'}>FAQs</Button></Nav.Link>
//                   <Nav.Link href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft"><Button className={'App-buy-button'}>Contact Us</Button></Nav.Link>
//                   <Nav.Link href="https://presale.figandgrape.io/"><Button className={'btn-grad'}>BUY FIG TOKEN</Button></Nav.Link>
//                   {/* <a href=><Button className="App-buy-button"> {} BUY FIG TOKEN {} </Button> */}

//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </header>
//         <main className="App-main">
//           <div className="App-bg-grape-background">
//             <Container>
//               <Row>
//                 <Col>
//                   <div className="App-cubo-hero-2-image">
//                   </div>
//                 </Col>
//                 <Col>
//                   <div className="App-texto-1">
//                     Discover our exclusive NFT Marketplace.
//                   </div>
//                   <div className="App-texto-2">
//                   We offer benefits for NFT artists and collectors, learn more...
//                   </div>
//                   <Row>
//                     <Col>
//                       <div className="App-buttons">
//                         <>
//                           <button className="btn-grad" onClick={() => setModalShow(true)}>
//                             Artists
//                           </button>

//                           <ModalArtists
//                             show={modalShow}
//                             onHide={() => setModalShow(false)} />
//                         </>
//                       </div>
//                     </Col>
//                     <Col>
//                       <div className="App-buttons">
//                         <>
//                         <button className="btn-grad"  onClick={() => setModalShow2(true)}>
//                           Collectors
//                         </button>
//                         <ModalCollectors
//                             show={modalShow2}
//                             onHide={() => setModalShow2(false)} />
//                         </>
//                       </div>
//                     </Col>
//                   </Row>

//                 </Col>
//               </Row>
//             </Container>
//           </div>
//           <div>

//           </div>
//           {/* CAROUSEL QUESTIONS */}
//           <div className="App-carousel">
//             {/* <Container> */}
//               {/* <Card > */}
//                 <div className="App-card">
//                   <Container>
//                     <Row>
//                       <Col>
//                         <Carousel interval={10000}>
//                           <Carousel.Item>
//                             <img
//                               className="App-carousel-frame"
//                               src={fondoSlider}
//                               height={"300px"}
//                               width={"800px"}
//                               alt="First slide" />
//                             <Carousel.Caption>
//                               <img
//                                 src={neon}
//                                 height={"150px"}
//                                 width={"150px"}
//                                 alt="neon" />
//                               <h3 className="App-texto-question">What is Grape NFT Marketplace?</h3>
//                               <p>Grape NFT Marketplace brings together international artists, VIP celebrities and the bests creators on a single platform to buy and sell premium and exclusive NFTs, and even create them in version 2.0!</p>
//                             </Carousel.Caption>
//                           </Carousel.Item>
//                           <Carousel.Item>
//                             <img
//                               className="App-carousel-frame"
//                               src={fondoSlider}
//                               height={"300px"}
//                               width={"800px"}
//                               alt="Second slide" />

//                             <Carousel.Caption>
//                               <img
//                                 src={neon}
//                                 height={"150px"}
//                                 width={"150px"}
//                                 alt="neon" />
//                               <h3 className="App-texto-question">What is a non-fungible token (NFT)?</h3>
//                               <p>NFT stands for Non Fungible Token. They are digital assets that represent a wide range of unique tangible and intangible items: Collectible sport cards, artwork, virtual real estate; music, movies.</p>
//                             </Carousel.Caption>
//                           </Carousel.Item>
//                           <Carousel.Item>
//                             <img
//                               className="App-carousel-frame"
//                               src={fondoSlider}
//                               height={"300px"}
//                               width={"800px"}
//                               alt="Third slide" />

//                             <Carousel.Caption>
//                               <img
//                                 src={neon}
//                                 height={"150px"}
//                                 width={"150px"}
//                                 alt="neon" />
//                               <h3 className="App-texto-question">How do I buy an NFT?</h3>
//                               <p>Very soon you will be able to carry out transactions as well as access digital assets of international creators and artists.</p>
//                             </Carousel.Caption>
//                           </Carousel.Item>
//                         </Carousel>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </div>
//               {/* </Card> */}
//             {/* </Container> */}
//           </div>
//             {/* CARROUSER CON PASOS PARA COMPRAR */}
//             {/* <div className="App-carousel">
//             <Container>
//               <Card>
//                 <div className="App-card">
//                   <Carousel interval={10000}>
//                     <Carousel.Item>
//                       <img
//                         className="App-carousel-frame"
//                         src={fondoSlider}
//                         height={"300px"}
//                         width={"800px"}
//                         alt="First slide" />
//                       <Carousel.Caption>
//                         <img
//                           src={neon}
//                           height={"150px"}
//                           width={"150px"}
//                           alt="neon" />
//                         <h3 className="App-texto-question">What is Grape NFT Marketplace?</h3>
//                         <p>Grape NFT Marketplace brings together international artists, VIP celebrities and the bests creators on a single platform to buy and sell premium and exclusive NFTs, and even create them in version 2.0!</p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                       <img
//                         className="App-carousel-frame"
//                         src={fondoSlider}
//                         height={"300px"}
//                         width={"800px"}
//                         alt="Second slide" />

//                       <Carousel.Caption>
//                         <img
//                           src={neon}
//                           height={"150px"}
//                           width={"150px"}
//                           alt="neon" />
//                         <h3 className="App-texto-question">What is a non-fungible token (NFT)?</h3>
//                         <p>NFT stands for Non Fungible Token. They are digital assets that represent a wide range of unique tangible and intangible items. Almost anything can be an NFT: Collectible sport cards, artwork, virtual real estate; music, movies.</p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                       <img
//                         className="App-carousel-frame"
//                         src={fondoSlider}
//                         height={"300px"}
//                         width={"800px"}
//                         alt="Third slide" />

//                       <Carousel.Caption>
//                         <img
//                           src={neon}
//                           height={"150px"}
//                           width={"150px"}
//                           alt="neon" />
//                         <h3 className="App-texto-question">How do I buy an NFT?</h3>
//                         <p>Very soon you will be able to carry out transactions as well as access digital assets of international creators and artists.</p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                   </Carousel>
//                 </div>
//               </Card>
//             </Container>
//           </div> */}
//               {/* NFT EMBEBIDO  */}
//           <h1 className="App-titulo-intermedio">Our Collections</h1>
//            {/* card 1 */}
//         <div className="App-card-new">
//         <article className="postcard dark blue">
//             <img className="postcard__img" src="https://i.ibb.co/JBWWXQ0/1-nft-banner.jpg" alt="Title" />
//           <div className="postcard__text">
//             <h1 className="postcard__title blue">Carlos Marín</h1>
//             <div className="postcard__subtitle small">
//             </div>
//             <div className="postcard__bar"></div>
//             <div className="postcard__preview-txt">
//             Collection of exclusive NFTs in memory of the great artist Carlos Marín.</div>
//             <ul className="postcard__tagbox">
//              <button className="btn-grad-coming" >coming soon</button>
//             </ul>
//           </div>
//             <img className="postcard__img" src="https://i.ibb.co/S5WwGfV/1-photo-banner.jpg" alt="Title" />
//         </article>
//         </div>

//         <div className="App-espacio-inter"></div>

//         {/* card 2 - arboreum */}
//         <div className="App-card-new">
//               <article className="postcard dark red">
//               <img className="postcard__img" src="https://i.ibb.co/GpjZz2q/2-nft-banner.jpg" alt="Title" />
//             <div className="postcard__text">
//               <h1 className="postcard__title red">Arboreum - Albert Cuevas</h1>
//               <div className="postcard__subtitle small">
//               </div>
//               <div className="postcard__bar"></div>
//               <div className="postcard__preview-txt">One of the first series most exhibited in galleries, both in Spain and internationally. Based on the energy of tree branches through dowsing, the artist develops his creative capacity by providing photographic textures of all kinds.</div>
//               <ul className="postcard__tagbox">
//               <div className="App-wrap-button">
//                 <Link to="./collection" className="App-link">
//                 <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/arboreum-albert-cuevas");
//                               } }>collection</button>
//                 </Link>
//               </div>
//               </ul>
//             </div>
//               <img className="postcard__img" src="https://i.ibb.co/7XvNf4z/Monasterio.jpg" alt="Title" />
//           </article>
//         </div>

//          {/* card 2 - Mandalas*/}
//          <div className="App-card-new">
//               <article className="postcard dark red">
//               <img className="postcard__img" src="https://i.ibb.co/y8HXX24/mandala-banner.jpg" alt="Title" />
//             <div className="postcard__text">
//               <h1 className="postcard__title red">Mandalas - Albert Cuevas</h1>
//               <div className="postcard__subtitle small">
//               </div>
//               <div className="postcard__bar"></div>
//               <div className="postcard__preview-txt">Symmetrical images that are part of the mathematics of Nature. These works are made from the combination of unique geometric compositions in order to become a source of unique visual energy, representing trees and plants. Thanks to their symmetries, their textures and their colors, these works produce a unique state of balance and harmony.</div>
//               <ul className="postcard__tagbox">
//               <div className="App-wrap-button">
//                 <Link to="./collection" className="App-link">
//                 <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/mandalas-albert-cuevas");
//                               } }>collection</button>
//                 </Link>
//                 </div>
//               </ul>
//             </div>
//               <img className="postcard__img" src="https://i.ibb.co/7XvNf4z/Monasterio.jpg" alt="Title" />
//           </article>
//         </div>

//         {/* card 2 - Mikado*/}
//         <div className="App-card-new">
//               <article className="postcard dark red">
//               <img className="postcard__img" src="https://i.ibb.co/4KM7wqJ/mikado-banner.jpg" alt="Title" />
//             <div className="postcard__text">
//               <h1 className="postcard__title red">Mikado - Albert Cuevas</h1>
//               <div className="postcard__subtitle small">
//               </div>
//               <div className="postcard__bar"></div>
//               <div className="postcard__preview-txt">The objects found in the sand, at the foot of the sea, are transported to a clean and marine environment. Thanks to this, an atmosphere of very particular games and compositions is perceived.</div>
//               <ul className="postcard__tagbox">
//                 <div className="App-wrap-button">
//                 <Link to="./collection" className="App-link">
//                 <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/mikado-albert-cuevas");
//                               } }>collection</button>
//                 </Link>
//                 </div>
//               </ul>
//             </div>
//               <img className="postcard__img" src="https://i.ibb.co/7XvNf4z/Monasterio.jpg" alt="Title" />
//           </article>
//         </div>

//         {/* card 2 - Natura*/}
//         <div className="App-card-new">
//               <article className="postcard dark red">
//               <img className="postcard__img" src="https://i.ibb.co/LhrcxNj/natura-banner.jpg" alt="Title" />
//             <div className="postcard__text">
//               <h1 className="postcard__title red">Natura - Albert Cuevas</h1>
//               <div className="postcard__subtitle small">
//               </div>
//               <div className="postcard__bar"></div>
//               <div className="postcard__preview-txt">Works where chromaticism and composition are fundamental parts, where blurs and close-ups go hand in hand in order to achieve depth effects. A cocktail of harmony and colors. His vision will not leave us indifferent.</div>
//               <ul className="postcard__tagbox">
//                 <div className="App-wrap-button">
//                 <Link to="./collection" className="App-link">
//                 <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/natura-albert-cuevas");
//                               } }>collection</button>
//                 </Link>
//                 </div>
//               </ul>
//             </div>
//               <img className="postcard__img" src="https://i.ibb.co/7XvNf4z/Monasterio.jpg" alt="Title" />
//           </article>
//         </div>

//         {/* card 2 - Oniricus*/}
//           <div className="App-card-new">
//               <article className="postcard dark red">
//               <img className="postcard__img" src="https://i.ibb.co/z6wKxPj/oniricus-banner.jpg" alt="Title" />
//             <div className="postcard__text">
//               <h1 className="postcard__title red">Oníricus - Albert Cuevas</h1>
//               <div className="postcard__subtitle small">
//               </div>
//               <div className="postcard__bar"></div>
//               <div className="postcard__preview-txt">Series of images that could be experienced in a chromatic dream, transmitting good oneiric sensations and peace. Clouds, trees or imaginary animals are the true protagonists of these original works.</div>
//               <ul className="postcard__tagbox">
//               <div className="App-wrap-button">
//                 <Link to="./collection" className="App-link">
//                 <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/oniricus-albert-cuevas");
//                               } }>collection</button>
//                 </Link>
//                 </div>
//               </ul>
//             </div>
//               <img className="postcard__img" src="https://i.ibb.co/7XvNf4z/Monasterio.jpg" alt="Title" />
//           </article>
//         </div>

//        {/* card 3 */}
//        <div className="App-card-new">
//        <article className="postcard dark green">
// 				<img className="postcard__img" src="https://i.ibb.co/NT4RQ2Y/3-nft-banner.jpg" alt="Title" />
// 			<div className="postcard__text">
// 				<h1 className="postcard__title green">Pipanths</h1>
// 				<div className="postcard__subtitle small">
// 				</div>
// 				<div className="postcard__bar"></div>
// 				<div className="postcard__preview-txt">Collection of 3,000 Panthers NFTs—unique digital collectibles living on the Ethereum blockchain. </div>
// 				<ul className="postcard__tagbox">
//         <button className="btn-grad-coming" >coming soon</button>
//         {/* <Link to="./collection" className="App-link">
//          <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/doodles-official");
//                               } }>collection</button>
//         </Link> */}
// 				</ul>
// 			</div>
// 				<img className="postcard__img" src="https://i.ibb.co/8Xh3L0J/3-photo-banner.png" alt="Title" />
// 		</article>
//        </div>
//        {/* card 4 */}
//        <div className="App-card-new">
//        <article className="postcard dark yellow">
// 				<img className="postcard__img" src="https://i.ibb.co/P1ThN6h/4-nft-banner.jpg" alt="Title" />
// 			<div className="postcard__text">
// 				<h1 className="postcard__title yellow">Marcinkevicius</h1>
// 				<div className="postcard__subtitle small">
// 				</div>
// 				<div className="postcard__bar"></div>
// 				<div className="postcard__preview-txt">The most interesting photos taken in Argentine Patagonia, stunning natural landscapes captured in unique moments.
// </div>
// 				<ul className="postcard__tagbox">
//         <button className="btn-grad-coming" >coming soon</button>
//         {/* <Link to="./collection" className="App-link">
//          <button className="btn-grad" onClick={() => {
//                                 setCollectionUrl("https://opensea.io/collection/cryptopunks");
//                               } }>collection</button>
//         </Link> */}
// 				</ul>
// 			</div>
// 				<img className="postcard__img" src="https://i.ibb.co/4YGP0Fr/4-photo-banner.jpg" alt="Title" />
// 		</article>
//        </div>
//           {/* <div className="App-content-format">
//             {collectionUrl === "" ? (
//               <Container>
//                 {options.map((el) => {
//                   return (
//                     <article className="postcard dark blue">
//                       <a className="postcard__img_link" href="https://nft.figandgrape.io">
//                         <img className="postcard__img" src={el.imageUrl} alt="Title" />
//                       </a>
//                       <div className="postcard__text">
//                         <h1 className="postcard__title blue"><a href="https://nft.figandgrape.io">{el.title}</a></h1>
//                         <div className="postcard__subtitle small">
//                         </div>
//                         <div className="postcard__bar"></div>
//                         <div className="postcard__preview-txt">
//                           Desde su juventud ha sido una persona inquieta a la que le han interesado las disciplinas que, de alguna forma, pudieran ayudar al encuentro de la paz interior de las personas, teniendo siempre la naturaleza arbórea como fuente de inspiración de sus obras dentro del proyecto Zensations & Arbóreum.</div>
//                         <ul className="postcard__tagbox">
//                           <Link to="./collection">
//                           <button className="btn-grad" onClick={() => {
//                             // setOpenModal(true);D
//                             setCollectionUrl(el.collectionUrl);
//                           } }>
//                             Collection</button>
//                           </Link>
//                         </ul>
//                       </div>
//                       <a className="postcard__img_link" href="https://nft.figandgrape.io">
//                         <img className="postcard__img" src={el.imageUrl_2} alt="Title" />
//                       </a>
//                     </article>
//                   );
//                 })}
//               </Container>
//             ) : (
//               <div style={{ height: "2000px", position: "relative" }}>
//                 <div className="App-iframe-os"></div>
//                 <iframe
//                   id="opensea-iframe"
//                   title="Embedded OpenSea Marketplace"
//                   src={`${collectionUrl}?embed=true`}
//                   width="100%"
//                   height="2000px"
//                   frameBorder="0"
//                   allowFullScreen
//                   onLoad={() => iframeResizer({ log: false }, "#opensea-iframe")}
//                 ></iframe>
//               </div>
//             )}
//           </div> */}

//           <div className="App-coming-soon">
//             <h1 className="App-titulo-intermedio">Coming soon</h1>
//             <Container>
//               <Row>
//                 <Col>
//                   <img src={comingsoon1} alt="cms1" />
//                 </Col>
//                 <Col>
//                   <img src={comingsoon2} alt="cms1" />
//                 </Col>
//                 <Col>
//                   <img src={comingsoon3} alt="cms1" />
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//           <div className="App-bg-creators-background">
//             <Container>
//               <Row>
//                 <Col>
//                   <div className="App-texto-3">
//                     How to become an NFT creator on Fig&Grape?
//                   </div>
//                   <div className="App-texto-2">
//                     We are recruiting the best for the Fig&Grape Marketplace.It will be a unique opportunity that will allow you to be surrounded by great figures in the artistic field and VIP celebrities.</div>
//                 </Col>
//                 <Col>
//                   <div className="App-creators-image">
//                   </div>
//                 </Col>
//               </Row>
//               <Row>
//               <a href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft">
//                 <button className="App-buy-button" >Contact Us</button>
//               </a>
//               </Row>
//             </Container>
//           </div>
//         </main>
//         <footer className="App-footer">
//           <Container>
//             <Row>
//               <Col sm={4}>
//                 <img
//                   className="App-logo-footer"
//                   src={logofooter}
//                   alt="logo-footer" />
//               </Col>
//               <Col sm={4}>
//                 <Row>
//                   <Row>
//                     <h4 className="App-follow">follow us</h4>
//                   </Row>
//                   <Col>
//                     <SocialIcon url="https://discord.gg/yypTqyrqaN" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://telegram.me/figandgrape" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://www.instagram.com/figandgrape.io/" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://twitter.com/figandgrapeio" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://www.facebook.com/FigandGrape.io" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://www.linkedin.com/company/fig-and-grape" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="https://www.youtube.com/channel/UCM5yb6lCTRCwaY3DOUElTSw" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                   <Col>
//                     <SocialIcon url="mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20landing" bgColor="black" fgColor="white" style={{ height: 30, width: 30 }} />
//                   </Col>
//                 </Row>
//               </Col>
//               <Col sm={4}>
//                 <a href="https://presale.figandgrape.io/"><button className="App-buy-button-footer"> {'>'} BUY FIG TOKEN {'<'} </button></a>
//               </Col>
//             </Row>
//           </Container>
//           <h6 className="App-copyright">Copyright © 2022 Fig & Grape</h6>
//         </footer>
//       </div>
//           </Route>
//           <Redirect to="/" />
//         </Switch>
//       </div>
//     </Router>
// </>
//   );
// };
// function ModalArtists(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="App-modal"
//     >
//       <Modal.Header className="App-modal-header" closeButton>
//         <Modal.Title className="App-texto-question" id="contained-modal-title-vcenter">
//           NFT Artists
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="App-modal-body">
//         <h4>Artists benefits</h4>
//         <p>
//         Monetize your digital creations.<br></br>
//         Expose them in our market.<br></br>
//         You will earn on all future transactions.<br></br>
//         </p>
//       </Modal.Body>
//       <Modal.Footer className="App-modal-footer">
//         <a href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft">
//         <button className="App-buy-button" onClick={props.onHide}>Contact Us</button>
//         </a>
//       </Modal.Footer>
//     </Modal>
//   );

// }
// function ModalCollectors(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="App-modal"
//     >
//       <Modal.Header className="App-modal-header" closeButton>
//         <Modal.Title className="App-texto-question" id="contained-modal-title-vcenter">
//           NFT Collectors
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="App-modal-body">
//         <h4>Collectors benefits</h4>
//         <p>
//         Get early access to the most promising collections.<br></br>
//         Enter the draw for NFT's giveaways<br></br>
//         Receive our FIG token with the purchase of NFTs in future collections<br></br>
//         </p>
//       </Modal.Body>
//       <Modal.Footer className="App-modal-footer">
//       <a href="mailto:mailto:comunicacion@figandgrape.io?Subject=Contact%20from%20nft">
//         <button className="App-buy-button" onClick={props.onHide}>Contact Us</button>
//       </a>
//       </Modal.Footer>
//     </Modal>
