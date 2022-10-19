import { Card, Image } from "react-bootstrap";
import { useState } from "react";
import ImageView from "./ImageView";

function SingleImage({ meme }) {
  const [imageView, setImageView] = useState(false);
  return (
    <>
      <Card
        bg="dark"
        text="white"
        style={{ width: "20rem" }}
        className="card-hover"
        onClick={() => setImageView(true)}
      >
        <Image
          variant="top"
          src={meme.url}
          style={{ maxHeight: "70vh", objectFit: "contain" }}
          fluid
        />
        <Card.Body>
          <Card.Title>{meme.name}</Card.Title>
        </Card.Body>
      </Card>
      <ImageView meme={meme} show={imageView} onHide={() => setImageView(false)} />
    </>
  );
}

export default SingleImage;
