import React, { Component }  from "react";
import axios from 'axios'
export default class AddExpense extends Component {

  constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserBudget = this.onChangeUserBudget.bind(this);
      this.onChangeUserExpense = this.onChangeUserExpense.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          expense:'',
          budget: '',
          usersCollection: []
      }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/budget')
        .then(res => {
            this.setState({ usersCollection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}

  onChangeUserName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeUserBudget(e) {
      this.setState({ budget: e.target.value })
  }

  onChangeUserExpense(e) {
    this.setState({ expense: e.target.value })
}
  onSubmit(e) {
      e.preventDefault()

      const userObject = {
          name: this.state.name,
          expense: this.state.expense,
          budget: this.state.budget

      };

      axios.post('http://localhost:4000/api/expense/create', userObject)
          .then((res) => {
              console.log(res.data)

          }).catch((error) => {
              console.log(error)
          });

      this.setState({ name: '', expense:'', budget: '' })
  }


  render() {
      return (
          <div className='addBudget'>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Expense</label>
                      <input type="text" value={this.state.expense} onChange={this.onChangeUserExpense} className="form-control" />
                  </div>
                  <div className="form-group">
                  <select
                    id="expense-budget"
                    class="form-control"
                    onChange={this.onChangeUserBudget}
                  >
                      <optgroup>
                      <option value="" disabled selected>
                        Select Budget
                      </option>
                      {this.state.usersCollection.map((budget, index) => (
                        <option key={index} value={budget.name} >
                          {budget.name}
                        </option>
                      ))}
                    </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Add Budget" className="btn btn-success btn-block" />
                  </div>
              </form>
          </div>
      )
  }
}
