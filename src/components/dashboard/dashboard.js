import React from "react";
import BudgetBarChart from "../budgetBarChart/BudgetBarChart";
import BudgetPieChart from "../budgetChart/BudgetPieChart";
import ExpensePieChart from "../expensePieChart/ExpensePieChart";
import Expense from "../expense/Expense";

import Navbar from "../navBar/NavBar";

function Dashboard() {
  return <div>
      <div className="side-nav">
        <BudgetPieChart/>
        </div>
        <div>
        <BudgetBarChart/>
        </div>
        <div>
          <ExpensePieChart/>
        </div>
        <div>
        <Expense/>
        </div>
  </div>;
}

export default Dashboard;