import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            mail: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMailHandler = this.changeMailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }


    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({ name: employee.name, mail: employee.mail });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { name: this.state.name, mail: this.state.mail };
        console.log(JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
            this.props.history.push('/employees');
        })
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeMailHandler = (event) => {
        this.setState({ mail: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Mail</label>
                                        <input type="text" placeholder="Mail" name="mail" className="form-control" value={this.state.mail} onChange={this.changeMailHandler} />
                                    </div>
                                    <button className="btn btn-success mt-2" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger mt-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}