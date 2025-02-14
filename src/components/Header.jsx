import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center mb-4">
      <Navbar.Brand>Expense Tracker 💰</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
