import React, { Component } from 'react';
import moment from "moment";


class BudgetData extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.budget}
                </td>
                <td>
                    {moment(this.props.obj.date).format("MMMM")}
                </td>
                <td>
                    good
                </td>
            </tr>
        );
    }
}

export default BudgetData;