import React, { Component } from 'react'
import UserService from '../../services/UserService';

export default class UserDetailComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {

            }
        }

    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then((res) => {
            this.setState({ user: res.data });
        });;
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4>User Detail</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            Name :
                        </div>
                        <div className="col-md-2">
                            {this.state.id} - {this.state.user.name}
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                        Mail:
                        </div>
                        <div className="col-md-2">
                            {this.state.user.mail}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}