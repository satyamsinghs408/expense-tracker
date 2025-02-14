import React, { useState, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: new Date().toISOString().split("T")[0],
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <Card className="p-3 mb-4">
      <h3>Add New Transaction</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount (- for expense, + for income)</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          Add Transaction
        </Button>
      </Form>
    </Card>
  );
};

export default AddTransaction;
