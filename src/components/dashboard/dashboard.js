import React from "react";
import BudgetBarChart from "../budgetBarChart/BudgetBarChart";
import BudgetPieChart from "../budgetChart/BudgetPieChart";
import ExpensePieChart from "../expensePieChart/ExpensePieChart"

import Navbar from "../navBar/NavBar";

function Dashboard() {
  return <div>
      <div class="side-nav">
        <BudgetPieChart/>
        </div>
        <div>
        <BudgetBarChart/>
        </div>
        <div>
          <ExpensePieChart/>
        </div>
  </div>;
}

export default Dashboard;