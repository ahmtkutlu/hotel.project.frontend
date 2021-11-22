import React, { Component } from 'react'
import UserService from '../../services/UserService';

export default class UserCreateComponent extends Component {

    constructor(props) {

        super(props);
       
        this.state = {
            id: this.props.match.params.id,
            name: '',
            mail: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMailHandler = this.changeMailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);

    }
    componentDidMount() {
        if(this.state.id === 'add'){
            return;
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({ name: user.name, mail: user.mail });
            });
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { name: this.state.name, mail: this.state.mail };
             if(this.state.id === 'add'){
                UserService.createUser(user).then(res => {
                    this.props.history.push('/users');
                });
            } else {
                UserService.updateUser(user, this.state.id).then((res) => {
                    this.props.history.push('/users');
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
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === 'add'){
           return "Add User"
        } else {
           return "Update User"
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
                                    <button className="btn btn-success mt-2" onClick={this.saveUser}>Save</button>
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
