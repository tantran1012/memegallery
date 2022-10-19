import { Card } from "react-bootstrap";
import { useState } from "react";
import ImageView from "./ImageView";

function ImageCard({ data: { id, name, url } }) {
  const [imageView, setImageView] = useState(false);
  return (
    <>
      <Card
        bg="dark"
        text="white"
        className="card-hover"
        onClick={() => setImageView(true)}
      >
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
      <ImageView meme={{id:id, name:name, url:url}} show={imageView} onHide={() => setImageView(false)} />
    </>
  );
}

export default ImageCard;
