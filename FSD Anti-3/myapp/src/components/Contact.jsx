import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5 mb-5" id="contact">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get In Touch</h2>
        <p className="text-muted">Have a project in mind? Let's talk.</p>
      </div>
      <div className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card className="p-4 shadow-sm border">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="small fw-bold">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="small fw-bold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="small fw-bold">Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can I help you?" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2">
              Send Message
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default Contact;
