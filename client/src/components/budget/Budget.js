import React, { Component } from 'react';
import axios from 'axios';
import BudgetData from '../dataTable/BudgetData'
import { getBudget } from '../../api/budget';
import moment from 'moment'
import { Table, Tag, Space } from 'antd';
import Navbar from '../navBar/NavBar';

export default class Budget extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [], data: [] }
    
        
    }

    getBudgetData = async () =>{
        await getBudget().then((res)=>{
          for(var i=0;i<res.length;i++){
            this.state.usersCollection.push(res[i]);
         }
        })
        return this.state.usersCollection
      }

    componentDidMount() {
        if (this.state.usersCollection.length === 0) {
            (async () => {
              try {
                this.setState({ usersCollection: await this.getBudgetData() });
              } catch (e) {
                //...handle the error...
              }
            })();
          }
    }

    dataTable(){
        
       
    }

    render() {
        const columns = [
            {
              title: 'Budget_Name',
              dataIndex: 'Budget_Name',
              key: 'Budget_Name',
            },
            {
              title: 'Budget_Limit',
              dataIndex: 'Budget_Limit',
              key: 'Budget_Limit',
            },
            {
              title: 'Budget_Month',
              dataIndex: 'Budget_Month',
              key: 'Budget_Month',
            },
            {
              title: 'Budget_Status',
              key: 'Budget_Status',
              dataIndex: 'Budget_Status',
            }]
            //     const data = [{
            //       Budget_Name: '',
            //       Budget_Limit: '',
            //       Budget_Month:'',
            //       Budget_Status:''
            //     }]
            // for( let i = 0 ; i < this.state.usersCollection.length; i++){
            //         data[i].Budget_Name = this.state.usersCollection[i].name;
            //         data[i].Budget_Limit = this.state.usersCollection[i].budget;
            //         data[i].Budget_Month = this.state.usersCollection[i].date;
            //         data[i].Budget_Status = this.state.usersCollection[i].capacity;
            // }
        this.state.usersCollection.map((table, i) => {
            this.state.data = [
                {
                  Budget_Name: table.name,
                  Budget_Limit: table.budget,
                  Budget_Month: moment(table.date).format("MMMM"),
                  Budget_Status: table.capacity < table.budget ? "Good" : "Exceeded"
                }]
        });
        return (
          <>
          <Navbar/>
            <Table columns={columns} dataSource={ this.state.data } />
            </>
        )
    }
}