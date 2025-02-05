import { Col, Container, Row } from "react-bootstrap";
import "./slideService.css";

const SlideService = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={12}>
          <img src={cover} alt="#" />
        </Col>
      </Row>
    </Container>
  );
};
export default SlideService;
