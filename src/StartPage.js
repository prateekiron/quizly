import React from "react";
import { Button, Container, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";

import Footer from "./shared/components/Footer";
import SelectBox from "./shared/components/SelectBox";

const StartPage = () => (
  <Container>
    <div className="pricing-header px-3 py-5 mx-auto text-center mt-5">
      <h1 className="display-3 font-weight-bold font-italic text-dark">Quizly</h1>
      <p className="lead font-italic text-gray">
        A web based, peer-to-peer classroom response system, tailored to
        computer science education at university level.
      </p>
    </div>

    <CardDeck className="text-center">

      <SelectBox
        header="For Instructors"
        text="Start the server app, which allows you to create new question sets and accept connections from students."
        emoji="👩‍🏫"
      >
        <>
          <Button
            tag={Link}
            to="/server/editor"
            size="lg"
            block
            outline
            color="teal"
            className="align-self-end mt-auto"
          >
            Create Quiz Session
          </Button>
        </>
      </SelectBox>

      <SelectBox
        header="For Students"
        text="Start the client app, which allows you to connect to an existing session and answer questions."
        emoji="👩‍🎓"
      >
        <Button
          tag={Link}
          to="/client/connect"
          size="lg"
          block
          outline
          color="teal"
          className="align-self-end mt-auto"
        >
          Join Quiz Session
        </Button>
      </SelectBox>

    </CardDeck>

    <Footer />
  </Container>
);

export default StartPage;
