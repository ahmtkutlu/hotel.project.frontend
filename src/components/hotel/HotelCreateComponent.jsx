import React, { Component } from 'react'
import HotelService from '../../services/HotelService';

export default class HotelCreateComponent extends Component {

    constructor(props) {

        super(props);
       
        this.state = {
            id: this.props.match.params.id,
            name: '',
            status: false
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveHotel = this.saveHotel.bind(this);
    }
    componentDidMount() {
        if(this.state.id === 'add'){
            return;
        } else {
            HotelService.getHotelById(this.state.id).then((res) => {
                let hotel = res.data;
                this.setState({ name: hotel.name, status: hotel.status });
            });
        }
    }

    saveHotel = (e) => {
        e.preventDefault();
        let hotel = { name: this.state.name, status: this.state.status };
             if(this.state.id === 'add'){
                HotelService.createHotel(hotel).then(res => {
                    this.props.history.push('/hotel');
                });
            } else {
                HotelService.updateHotel(hotel, this.state.id).then((res) => {
                    this.props.history.push('/hotel');
                })
            }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }

    cancel(){
        this.props.history.push('/hotel');
    }

    getTitle(){
        if(this.state.id === 'add'){
           return "Add Hotel"
        } else{
           return "Update Hotel"
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
                                        <label>Status</label>
                                        <input type="checkbox" name="mail" value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>
                                    <button className="btn btn-success mt-2" onClick={this.saveHotel}>Save</button>
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