import React, { Component } from 'react'
import HotelService from '../../services/HotelService';

export default class HotelListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
        this.addHotel = this.addHotel.bind(this);
        this.editHotel = this.editHotel.bind(this);
        this.deleteHotel = this.deleteHotel.bind(this);
        this.hotelDetail = this.hotelDetail.bind(this);
    }
    componentDidMount() {
        HotelService.getHotels().then((res) => {
            this.setState({ hotels: res.data });
        });
    }

    hotelDetail(id) {
        this.props.history.push('/hotel-detail/' + id);
    }

    deleteHotel(id) {
        HotelService.deleteHotel(id).then((res) => {
            this.setState({ hotels: this.state.hotels.filter(hotel => hotel.id !== id) });
        });
    }

    addHotel() {
        this.props.history.push('/add-hotel/add');
    }

    editHotel(id) {
        this.props.history.push('/add-hotel/' + id);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Hotel List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm w-25 my-3" onClick={this.addHotel}> Add Hotel </button>
                </div>
                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Hotel</th>
                                <th>Status</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotels.map(hotel =>
                                    <tr key={hotel.id}>
                                        <td> {hotel.name}</td>
                                        <td> {hotel.status}</td>
                                        <td>
                                            <button className="btn btn-info text-white rounded-0" onClick={() => this.editHotel(hotel.id)}>Update</button>
                                            <button className="btn btn-danger text-white rounded-0" onClick={() => this.deleteHotel(hotel.id)}>Delete</button>
                                            <button className="btn btn-warning text-white rounded-0" onClick={() => this.hotelDetail(hotel.id)}>Detail</button>
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