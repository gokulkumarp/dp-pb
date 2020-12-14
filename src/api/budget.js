import { get, post } from './restProxy';

export const addBudget = (data) => {
  return post('http://localhost:4000/api/budget/create', data);
};

export const getBudget = () => {
    return get('http://localhost:4000/api/budget');
  };

export const getBudgetChart = (data) =>{
    return get('http://localhost:4000/api/budget/month/chart', data)
}

