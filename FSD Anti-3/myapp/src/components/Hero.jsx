import React from 'react';
import { Container, Badge, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className="text-center py-5 mt-5">
      <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">OPEN FOR WORK</Badge>
      <h1 className="display-4 fw-bold mb-3">
        Creative Developer<br />Building Scalable<br />Apps
      </h1>
      <p className="lead text-muted mb-4">
        Specializing in modern JavaScript frameworks like React and Vite to<br />
        create seamless user experiences and robust backend integrations.
      </p>
      <div>
        <Button variant="primary" size="lg" className="me-3">View Projects</Button>
        <Button variant="outline-dark" size="lg">Contact Me</Button>
      </div>
    </Container>
  );
};

export default Hero;
