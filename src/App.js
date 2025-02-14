import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import FilterTransactions from "./components/FilterTransactions";
import { GlobalContext } from "./context/GlobalState";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const { transactions } = useContext(GlobalContext);

  const handleFilter = (startDate, endDate) => {
    if (!startDate || !endDate) {
      setFilteredTransactions(null);
      return;
    }
    const filtered = transactions.filter(
      (t) => t.date >= startDate && t.date <= endDate
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div
      className={
        darkMode ? "bg-dark text-white min-vh-100" : "bg-light text-dark min-vh-100"
      }
    >
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Header />
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={() => setDarkMode(!darkMode)}
              className="mb-3"
            >
              Toggle Dark Mode
            </Button>
            <FilterTransactions onFilter={handleFilter} />
            <Balance />
            <ExpenseChart />
            <TransactionList transactions={filteredTransactions || undefined} />
            <AddTransaction />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const AppWrapper = () => {
  // We wrap the App with the GlobalProvider here.
  // This file assumes you have created GlobalState.js and AppReducer.js in the context folder.
  const { GlobalProvider } = require("./context/GlobalState");
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};

export default AppWrapper;
