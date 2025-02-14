import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ExpenseChart = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#28a745", "#dc3545"];

  return (
    <div className="mb-4">
      <h3>Expense Chart</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
