import React, { useEffect, useState } from "react";
import { options } from "./constants";
import logo from "./static/images/logo.png";
import footer from "./static/images/footer.png";
import { iframeResizer } from "iframe-resizer";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./static/styles/App.css";



const App = () => {
  const [collectionUrl, setCollectionUrl] = useState("");
  useEffect(() => {
    // console.log("resizing");
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
                      md={el.title.match(/Soraya|Il Divo/gi) ? 12 : 6}
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
                            backgroundSize: el.backgroundSize || "auto",
                            height: "300px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "40px",
                              fontWeight: 800,
                              textShadow: "-2px 2px black",
                              color: "white",
                            }}
                          >
                            {el.title}
                          </span>
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
                          {/* <Image
                            alt={`${el.title} Collection`}
                            style={{
                              background: "transparent",
                              height: "270px",
                              objectFit: "contain",
                              width: "100%",
                              zIndex: 100,
                            }}
                            src={el.imageUrl}
                            onClick={() => {
                              // setOpenModal(true);D
                              setCollectionUrl(el.collectionUrl);
                            }}
                          /> */}
                        </div>
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
                onLoad={() => iframeResizer({ log: false }, "#opensea-iframe")}
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
