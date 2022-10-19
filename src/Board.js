import { Masonry } from "masonic";
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ImageCard from "./Image/ImageCard";
import SingleImage from "./Image/SingleImage";

function Board({ isViewAll }) {
  const [memes, setMemes] = useState([]);
  const [rand, setRand] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memes) => setMemes(memes.data.memes));
    document.title = 'Memes Gallery'
  }, []);

  useEffect(() => {
    setRand(Math.floor(Math.random() * memes.length));
  }, [memes]);

  const handleRandom = () => {
    setRand(Math.floor(Math.random() * memes.length));
  };

  if (isViewAll) {
    return (
      <>
        <Masonry
          items={memes}
          columnGutter={30}
          columnWidth={240}
          overscanBy={5}
          render={ImageCard}
        />
      </>
    );
  } else {
    return (
      <>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto" sm="auto" className="mb-3">
            <Button variant="success" onClick={handleRandom}>
              Other meme
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto" sm="auto">
            <SingleImage meme={memes.at(rand)} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Board;
