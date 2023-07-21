import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const reactProjects = [
    {
      title: 'Personal Portfolio',
      description: 'lorem ipsum',
      imgUrl: projImg1
    },
    {
      title: 'Ordering',
      description: 'E-Commerce',
      imgUrl: projImg2
    },
    {
      title: 'Doctor Appointment',
      description: 'lorem ipsum',
      imgUrl: projImg3
    }
  ];

  const angularProjects = [
    {
      title: 'Student Attendence',
      description: 'lorem ipsum',
      imgUrl: projImg1
    },
    {
      title: 'Town Planning',
      description: 'E-Commerce',
      imgUrl: projImg2
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>lorem ipsum</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">MERN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">MEAN</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {reactProjects.map((project) => {
                      return <ProjectCard key={project.title} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {angularProjects.map((project) => {
                      return <ProjectCard key={project.title} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="sharp-color"
      />
    </section>
  );
};
