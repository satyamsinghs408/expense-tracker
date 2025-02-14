import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = ({ transactions: filteredTransactions }) => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  const displayTransactions = filteredTransactions || transactions;

  return (
    <div>
      <h3>Transaction History</h3>
      <ListGroup>
        {displayTransactions.map((transaction) => (
          <ListGroup.Item
            key={transaction.id}
            className={transaction.amount >= 0 ? "text-success" : "text-danger"}
          >
            {transaction.text} <span>${transaction.amount}</span>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTransaction(transaction.id)}
              className="float-end"
            >
              X
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TransactionList;
