import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            I have created a MERN authentication boilerplate that stores JWT in
            HTTP-Only cookies. It utilizes Redux Toolkit for efficient state
            management and incorporates the React Bootstrap library for a
            visually appealing interface. This boilerplate empowers developers
            to quickly build secure web applications with ease.
          </p>
          <div className="d-flex">
            <LinkContainer to="login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Register</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
