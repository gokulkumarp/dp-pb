import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { getExpenseChart } from "../../api/expense";

const ExpensePieChart = () => {
  const [chartExpense, setChartExpense] = useState({
    title: [],
    expense: [],
  });
  const getChartExpense = () => {
    getExpenseChart()
      .then((res) => {
        setChartExpense({
          ...chartExpense,
          title: res.map((data) => {
            return data.name;
          }),
          expense: res.map((data) => {
            return data.expense;
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  const { title, expense } = chartExpense;
  const data = {
    labels: title,
    datasets: [
      {
        data: expense,
        backgroundColor: [
          "#F4D06F",
          "#FF8811",
          "#9DD9D2",
          "#FFF8F0",
          "#392F5A",
        ],
      },
    ],
  };

  useEffect(() => {
    getChartExpense();
  }, []);

  return (
    <Pie
      data={data}
      width={400}
      height={400}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default ExpensePieChart;
