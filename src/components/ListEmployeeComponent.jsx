import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.employeeDetail = this.employeeDetail.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    employeeDetail(id) {
        this.props.history.push('/employee-detail/' + id);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    addEmployee() {
        //step6
        this.props.history.push('/add-employee/0');
    }

    editEmployee(id) {
        //step 7
        this.props.history.push('/add-employee/' + id);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm w-25 my-3" onClick={this.addEmployee}> Add Employee </button>
                </div>
                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td> {employee.name}</td>
                                        <td> {employee.mail}</td>
                                        <td>
                                            <button className="btn btn-info text-white rounded-0" onClick={() => this.editEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger text-white rounded-0" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                            <button className="btn btn-warning text-white rounded-0" onClick={() => this.employeeDetail(employee.id)}>Detail</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

