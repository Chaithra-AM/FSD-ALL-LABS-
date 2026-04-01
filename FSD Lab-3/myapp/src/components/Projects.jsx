import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const projectData = [
  {
    title: 'E-Commerce Platform',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400',
    tags: ['React', 'Bootstrap', 'Node.js'],
    desc: 'A full-featured store with payment gateway integration and real-time inventory.',
  },
  {
    title: 'Task Management Tool',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
    tags: ['Vite', 'Tailwind', 'Firebase'],
    desc: 'A productivity app featuring drag-and-drop tasks and team collaboration suites.',
  },
  {
    title: 'Weather Dashboard',
    img: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=400',
    tags: ['JavaScript', 'API', 'Chart.js'],
    desc: 'Visualizing real-time weather data with dynamic charts and geolocation support.',
  }
];

const Projects = () => {
  return (
    <Container className="py-5" id="projects">
      <div className="text-center mb-5 mt-4">
        <h2 className="fw-bold">My Recent Work</h2>
        <p className="text-muted">A showcase of technical skills and creative solutions.</p>
      </div>
      <Row className="g-4">
        {projectData.map((proj, idx) => (
          <Col lg={4} md={6} key={idx}>
            <Card className="h-100 shadow-sm border-0 project-card">
              <Card.Img variant="top" src={proj.img} />
              <Card.Body>
                <div className="mb-2">
                  {proj.tags.map((tag, i) => (
                    <Badge bg="light" text="dark" className="me-2 border" key={i}>{tag}</Badge>
                  ))}
                </div>
                <Card.Title className="fw-bold">{proj.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {proj.desc}
                </Card.Text>
                <a href="#" className="text-decoration-none fw-bold small">View Project Details &rarr;</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
