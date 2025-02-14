import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Card className="text-center mb-4">
      <Card.Body>
        <h4>Your Balance</h4>
        <h2 className={total >= 0 ? "text-success" : "text-danger"}>
          ${total.toFixed(2)}
        </h2>
      </Card.Body>
    </Card>
  );
};

export default Balance;
