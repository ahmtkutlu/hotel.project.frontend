import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(hotel) {
        return axios.post(USER_API_BASE_URL, hotel);
    }

    getUserById(hotelId) {
        return axios.get(USER_API_BASE_URL + '/' + hotelId);
    }

    updateUser(hotel, hotelId) {
        return axios.put(USER_API_BASE_URL + '/' + hotelId, hotel);
    }

    deleteUser(hotelId) {
        return axios.delete(USER_API_BASE_URL + '/' + hotelId);
    }

}

export default new UserService();