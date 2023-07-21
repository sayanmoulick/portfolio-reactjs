import { Col, Container, Row } from 'react-bootstrap';
import logo from '../logo.svg';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} className="place-img">
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end place-img">
            <div className="social-icon">
              <a href="https://linkedin.com">
                <img src={NavIcon1} alt="NavIcon1" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={NavIcon2} alt="NavIcon2" />
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <img src={NavIcon3} alt="NavIcon3" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
