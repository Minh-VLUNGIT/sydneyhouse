import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/logo.png";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <img src={logo} alt="Multimart Logo" height="50px" width="auto" />
              <h1>Sydney House</h1>
            </div>
            <p>
              Chúng tôi cung cấp dịch vụ nhà hàng cao cấp, quầy bar sang trọng
              cùng sân chơi pickleball đạt chuẩn chất lượng.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Về Doanh Nghiệp</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Chăm Sóc Khách Hàng</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Thông Tin Liên Hệ</h2>
            <ul>
              <li>
                129/9 Võ Thị Sáu, Phường 2, Thành Phố Vũng Tàu, Tỉnh Bà Rịa -
                Vũng Tàu, Việt Nam{" "}
              </li>
              <li>Email: sydneyhousevungtau@gmail.com</li>
              <li>Phone: 083 972 6272</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
