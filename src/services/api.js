import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    headers: {'Accept': 'application/json'}
})

const getCurrentWeather = async (city, units) => {
    const res = await instance.get(`/weather?q=${city}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`);
    return res;
}



export { getCurrentWeather }