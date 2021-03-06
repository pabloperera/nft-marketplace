const Home = () => {
    const [collectionUrl, setCollectionUrl] = useState("");
    useEffect(() => {
});

return (
<div className="App">
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
<main className="App-main">
  <div className="App-bg-grape-background">
    <Container>
      <Row>
        <Col>
          <div className="App-cubo-hero-2-image">
          </div>
        </Col>
        <Col>
          <div className="App-texto-1">
            Discover our exclusive NFT Marketplace.
          </div>
          <div className="App-texto-2">
            Ofrecemos beneficios para artistas y coleccionistas NFT, saber mas...
          </div>
          <Row>
            <Col>
              <div className="App-buttons">
                <>
                  <button className="btn-grad" onClick={() => setModalShow(true)}>
                    Artists
                  </button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
                </>
              </div>
            </Col>
            <Col>
              <div className="App-buttons">
                <button className="btn-grad">Collectors</button>
              </div>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  </div>
  <div>

  </div>
  <div className="App-carousel">
    <Container>
      <Card>
        <div className="App-card">
          <Carousel interval={10000}>
            <Carousel.Item>
              <img
                className="App-carousel-frame"
                src={fondoSlider}
                height={"400px"}
                width={"800px"}
                alt="First slide" />
              <Carousel.Caption>
                <img
                  src={neon}
                  height={"150px"}
                  width={"150px"}
                  alt="neon" />
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
                alt="Second slide" />

              <Carousel.Caption>
                <img
                  src={neon}
                  height={"150px"}
                  width={"150px"}
                  alt="neon" />
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
                alt="Third slide" />

              <Carousel.Caption>
                <img
                  src={neon}
                  height={"150px"}
                  width={"150px"}
                  alt="neon" />
                <h3 className="App-texto-question">How do I buy an NFT?</h3>
                <p>Very soon you will be able to carry out transactions as well as access digital assets of international creators and artists.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Card>

    </Container>
  </div>
  <h1 className="App-titulo-intermedio">Our Collections</h1>

  <div className="App-content-format">
    {collectionUrl === "" ? (
      <Container>
        {options.map((el) => {
          return (
            <article className="postcard dark blue">
              <a className="postcard__img_link" href="https://nft.figandgrape.io">
                <img className="postcard__img" src={el.imageUrl} alt="Title" />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue"><a href="https://nft.figandgrape.io">{el.title}</a></h1>
                <div className="postcard__subtitle small">
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Desde su juventud ha sido una persona inquieta a la que le han interesado las disciplinas que, de alguna forma, pudieran ayudar al encuentro de la paz interior de las personas, teniendo siempre la naturaleza arb??rea como fuente de inspiraci??n de sus obras dentro del proyecto Zensations & Arb??reum.</div>
                <ul className="postcard__tagbox">
                  <button className="btn-grad" onClick={() => {
                    // setOpenModal(true);D
                    setCollectionUrl(el.collectionUrl);
                  } }>
                    Ver Coleccion</button>
                </ul>
              </div>
              <a className="postcard__img_link" href="https://nft.figandgrape.io">
                <img className="postcard__img" src={el.imageUrl_2} alt="Title" />
              </a>
            </article>
          );
        })}
      </Container>
    ) : (
      <div style={{ height: "2000px", position: "relative" }}>
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
            We are recruiting the best for the Fig&Grape Marketplace.It will be a unique opportunity that will allow you to be surrounded by great figures in the artistic field and VIP celebrities.</div>
        </Col>
        <Col>
          <div className="App-creators-image">
          </div>
        </Col>
      </Row>
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
  </Container>
  <h6 className="App-copyright">Copyright ?? 2022 Fig & Grape</h6>
</footer>
</div>
  );
};