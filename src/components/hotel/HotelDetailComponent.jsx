import React, { Component } from 'react'
import HotelService from '../../services/HotelService';

export default class HotelDetailComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            hotel: {

            }
        }

    }

    componentDidMount() {
        HotelService.getHotelById(this.state.id).then((res) => {
            this.setState({ hotel: res.data });
        });;
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Hotel Detail</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            Hotel Name :
                        </div>
                        <div className="col-md-2">
                            {this.state.id} - {this.state.hotel.name}
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            Status : 
                        </div>
                        <div className="col-md-2">
                            {this.state.hotel.status}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}