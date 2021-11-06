import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {

    constructor(props) {

        super(props);
       
        this.state = {
             //step 2
            id: this.props.match.params.id,
            name: '',
            mail: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMailHandler = this.changeMailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    //step 3
    componentDidMount() {
            //step4 
        if(this.state.id == 0){
            return;
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({ name: employee.name, mail: employee.mail });
            });
        }
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { name: this.state.name, mail: this.state.mail };
        console.log(JSON.stringify(employee));


             //step5 
             if(this.state.id == 0){
                EmployeeService.createEmployee(employee).then(res => {
                    this.props.history.push('/employees');
                });
            } else {
                EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
                    this.props.history.push('/employees');
                })
            }

       
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeMailHandler = (event) => {
        this.setState({ mail: event.target.value });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    //step 8
    getTitle(){
        if(this.state.id == 0){
           return "Add Employee"
        } else{
           return "Update Employee"
        }
       }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">{this.getTitle()}</h3>
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
                                    <button className="btn btn-success mt-2" onClick={this.saveEmployee}>Save</button>
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
