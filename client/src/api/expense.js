import { get, post } from './restProxy';

export const addExpense = (data) => {
  return post('http://localhost:4000/api/expense/create', data);
};

export const getExpenseChart = () =>{
  return get('http://localhost:4000/api/expense/monthlyReport')
}


export const getExpense = () => {
  return get('http://localhost:4000/api/expense');
};
