import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class EmployeeDetailComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {

            }
        }

    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({ employee: res.data });
        });;
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Employee Detail</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            Employee Name :
                        </div>
                        <div className="col-md-2">
                            {this.state.id} - {this.state.employee.name}
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                        Employee Mail:
                        </div>
                        <div className="col-md-2">
                            {this.state.employee.mail}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
