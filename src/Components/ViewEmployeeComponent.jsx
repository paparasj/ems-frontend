import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {withRouter} from '../others/withRouter';
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,

            employee: {}
        }
    }

    componentDidMount(){
        console.log(this.props.params.id);
        console.log(this.props.params.id);
        console.log(this.props.params.id);
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label class="col"> Employee Unique Id: </label><div class="col"> EMP{ this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label class="col"> Employee First Name: </label><div class="col"> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label class="col"> Employee Last Name: </label>
                            <div class="col"> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label class="col"> Employee Email ID: </label>
                            <div class="col"> { this.state.employee.emailId }</div>
                        </div>

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(ViewEmployeeComponent);   