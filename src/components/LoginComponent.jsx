import React, { Component } from 'react'

export default class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="offset-md-3 col-md-6 mt-5 pt-5">
                <div className="card">
                    <div className="card-header">
                        <h5>Login</h5>
                    </div>
                    <div className="card-body">
                        <div className="row px-4 my-3">
                            <label htmlFor="mail">Mail</label>
                            <input type="text" className="form-control" name="mail" id="mail" />
                        </div>
                        <div className="row px-4 my-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password" />
                        </div>
                        <div className="row px-4 my-3">
                            <button className="btn btn-primary d-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
