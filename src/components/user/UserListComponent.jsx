import React, { Component } from 'react'
import UserService from '../../services/UserService';

export default class UserListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.userDetail = this.userDetail.bind(this);
    }
    
    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    userDetail(id) {
        this.props.history.push('/user-detail/' + id);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then((res) => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }

    addUser() {
        this.props.history.push('/add-user/add');
    }

    editUser(id) {
        this.props.history.push('/add-user/' + id);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm w-25 my-3" onClick={this.addUser}> Add User </button>
                </div>
                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(user =>
                                    <tr key={user.id}>
                                        <td> {user.name}</td>
                                        <td> {user.mail}</td>
                                        <td>
                                            <button className="btn btn-info text-white rounded-0" onClick={() => this.editUser(user.id)}>Update</button>
                                            <button className="btn btn-danger text-white rounded-0" onClick={() => this.deleteUser(user.id)}>Delete</button>
                                            <button className="btn btn-warning text-white rounded-0" onClick={() => this.userDetail(user.id)}>Detail</button>
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