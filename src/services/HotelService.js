import axios from "axios";

const HOTEL_API_BASE_URL = "http://localhost:8080/api/hotel/hotel";

class HotelService {

    getHotels() {
        return axios.get(HOTEL_API_BASE_URL);
    }

    createHotel(hotel) {
        return axios.post(HOTEL_API_BASE_URL, hotel);
    }

    getHotelById(hotelId) {
        return axios.get(HOTEL_API_BASE_URL + '/' + hotelId);
    }

    updateHotel(hotel, hotelId) {
        return axios.put(HOTEL_API_BASE_URL + '/' + hotelId, hotel);
    }

    deleteHotel(hotelId) {
        return axios.delete(HOTEL_API_BASE_URL + '/' + hotelId);
    }

}

export default new HotelService();