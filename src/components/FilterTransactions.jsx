import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FilterTransactions = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className="mb-3">
      <h5>Filter by Date</h5>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="me-2"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="me-2"
      />
      <Button onClick={handleFilter} variant="secondary">
        Filter
      </Button>
    </div>
  );
};

export default FilterTransactions;
