import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LeftMenu extends Component {
    
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <nav className="my-5 mx-4 pt-5">
                <ul className="list-unstyled">
                    <li className="mb-1"> 
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className="mb-1"> 
                        <Link to="/users">Kullanıcılar</Link>
                    </li>
                    <li className="mb-1">
                        <Link to="/hotel">Oteller</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}