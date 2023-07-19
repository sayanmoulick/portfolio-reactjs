import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meterOne from '../assets/img/meter1.svg';
import meterTwo from '../assets/img/meter2.svg';
import meterThree from '../assets/img/meter3.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>lorem ipsum</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-sliders"
              >
                <div className="item">
                  <img src={meterOne} alt="Meter1" />
                  <h5>HTML/HTML5</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>CSS/CSS3</h5>
                </div>
                <div className="item">
                  <img src={meterThree} alt="Meter3" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>SQL/MySQL</h5>
                </div>
                <div className="item">
                  <img src={meterTwo} alt="Meter2" />
                  <h5>jest</h5>
                </div>
                <div className="item">
                  <img src={meterThree} alt="Meter3" />
                  <h5>git</h5>
                </div>
                <div className="item">
                  <img src={meterThree} alt="Meter3" />
                  <h5>Postman</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
