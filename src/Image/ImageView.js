import { Image, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function ImageView({ meme, ...props }) {
  return (
    <Modal
      {...props}
      fullscreen={'md-down'}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{meme.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto" sm="auto">
            <Image
              src={meme.url}
              style={{ maxHeight: "80vh", objectFit: "contain" }}
              fluid
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default ImageView;
