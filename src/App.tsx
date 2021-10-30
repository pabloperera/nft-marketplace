import React, { useEffect, useState } from "react";
import { ASSET_URL } from "./constants";
import logo from "./static/images/logo.png";
import footer from "./static/images/footer.png";
import { iframeResizer } from "iframe-resizer";
import {
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import "./static/styles/App.css";

const options = [
  {
    title: "Soraya",
    collectionUrl:
      "https://opensea.io/collection/kaiju-kingz",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Soraya_Arnelas_3.jpg",
  },
  {
    title: "Il Divo",
    collectionUrl:
      "https://opensea.io/collection/jungle-freaks-by-trosley",
    imageUrl:
      "https://denverconvention.com/uploads/content/ILDIVOPRESSSHOTSTAGE(1).jpg",
  },
  {
    title: "Pink Panthers",
    collectionUrl:
      "https://opensea.io/collection/doodles-official",
    imageUrl:
      "https://vistapointe.net/images/pink-panther-wallpaper-2.jpg",
  },
  {
    title: "NFT 3D",
    collectionUrl:
      "https://opensea.io/collection/cryptopunks",
    imageUrl:
      "https://491569-1551798-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/09/Nu_ComputerGirl_22.png",
  },
  {
    title: "Fig & Grape",
    collectionUrl:
      "https://opensea.io/collection/boredapeyachtclub",
    imageUrl:
      "https://thumbs.dreamstime.com/b/fig-white-grape-10911840.jpg",
  },
  {
    title: "Stamps",
    collectionUrl: ASSET_URL,
    imageUrl:
      "https://fthmb.tqn.com/1LBGKoLrGTPYGRa2cGZWV1jY4RM=/1280x853/filters:fill(auto,1)/166963448-F-56b005105f9b58b7d01f7e61.jpg",
  },
];

const App = () => {
  const [collectionUrl, setCollectionUrl] = useState("");
  useEffect(() => {
    console.log("resizing");
  });

  return (
    <div className="App">
      {/* {renderModal()} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <i className="material-icons right">menu</i>
      </header>
      <main className="App-main">
        <div className="App-hero">
          <div className="App-hero-image"></div>
          <p>Grape Marketplace</p>
          <small>NFTs para potenciar tus ideas.</small>
        </div>
        <div style={{ width: "100%" }}>
          {collectionUrl === "" ? (
            <Container>
              <Row>
                {options.map((el) => {
                  return (
                    <Col
                      md={4}
                      style={{ margin: "20px 0px" }}
                    >
                      <Card>
                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '300px' }}>
                          {/* <Image
                            alt={`${el.title} Collection Background`}
                            style={{
                              height: "300px",
                              filter: "blur(10px)",
                              left: 0,
                              top: 0,
                              objectFit: "contain",
                              position: 'absolute',
                              width: '100%',
                              zIndex: -1,
                            }}
                            src={el.imageUrl}
                            onClick={() => {
                              // setOpenModal(true);D
                              setCollectionUrl(
                                el.collectionUrl
                              );
                            }}
                          /> */}
                          <Image
                          alt={`${el.title} Collection`}
                            style={{
                              background: 'transparent',
                              height: "270px",
                              objectFit: "contain",
                              width: '100%',
                              zIndex: 100,
                            }}
                            src={el.imageUrl}
                            onClick={() => {
                              // setOpenModal(true);D
                              setCollectionUrl(
                                el.collectionUrl
                              );
                            }}
                          />
                        </div>
                        <Card.Header>
                          {el.title}
                        </Card.Header>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          ) : (
            <div>
              <iframe
                id="opensea-iframe"
                title="Embedded OpenSea Marketplace"
                src={`${collectionUrl}?embed=true`}
                width="100%"
                height="2000px"
                frameBorder="0"
                allowFullScreen
                onLoad={() =>
                  iframeResizer(
                    { log: false },
                    "#opensea-iframe"
                  )
                }
              ></iframe>
            </div>
          )}
        </div>
      </main>
      <footer className="App-footer">
        {/* Placeholder image for footer */}
        <img
          style={{ width: "100%" }}
          src={footer}
          className="footer"
          alt="footer"
        />
      </footer>
    </div>
  );
};

export default App;
