import axios from "axios"

const API_KEY = "fa0e36a808af49c8be2174257242510"
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Dehradun`

export async function fetchWeatherService() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}
export async function fetchByCity(City) {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${City}`);
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}
