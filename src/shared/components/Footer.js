import React from "react";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import { Row, Col } from "reactstrap";

const Footer = () => (
  <div>
    <hr />
    <footer className="container">
      <Row>
        <Col>
          <a className="font-weight-light text-muted" href="/about">
            &copy; 2019 Quizly - Ayush Jain, Ayush Srivastava, Prateek Gupta
          </a>
        </Col>
        <Col className="text-right">
          <a href="https://github.com/prateekiron/quizly">
            <GithubCircleIcon />
          </a>
        </Col>
      </Row>
    </footer>
  </div>
);

export default Footer;
