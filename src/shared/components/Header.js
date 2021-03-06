import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Navbar, NavbarBrand, NavLink } from "reactstrap";
import ConnectionIndicator from "./ConnectionIndicator";

const Header = props => {
  const {
    status,
    numberOfClients,
    isServer,
    isClient,
    ownServerId,
    peer
  } = props;
  return (
    <>
      <Navbar
        expand="sm"
        className="mb-4 border-bottom shadow-none d-flex flex-row justify-content-between bg-white py-3"
      >
        <Container>
          <NavbarBrand className="w-50" href="/">
            Quizly
            {isServer ? " Server" : " Client"}
          </NavbarBrand>
          {(isServer || isClient) && (
            <ConnectionIndicator
              isServer={isServer}
              status={status}
              numberOfClients={numberOfClients}
              ownServerId={ownServerId}
              peer={peer}
            />
          )}

          <NavLink className="w-50 text-right" tag={Link} to="/about">
            About
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  isServer: PropTypes.bool,
  isClient: PropTypes.bool,
  status: PropTypes.number,
  numberOfClients: PropTypes.number,
  ownServerId: PropTypes.string
};

Header.defaultProps = {
  isServer: false,
  isClient: false,
  numberOfClients: 0,
  ownServerId: "",
  status: 0
};

export default Header;
