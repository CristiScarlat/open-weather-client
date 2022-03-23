import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/globalContext';
import { getCurrentWeather } from '../services/api';

const Home = () => {
    const [data, setData] = useState();
    const { city } = useContext(GlobalContext);
    const units = 'metric';

    useEffect(() => {
        if (city) {
            getCurrentWeather(city, units)
                .then(res => {
                    const temp = {
                        temperature: {value: res.data.main.temp, unit: 'C'},
                        pressure: {value: res.data.main.pressure, unit: 'hPa'},
                        humidity: {value: res.data.main.humidity, unit: '%'},
                        wind: {value: res.data.wind.speed, unit: 'm/s'},
                        description: {value: res.data.weather[0].description},
                        icon: {value: res.data.weather[0].icon}
                    }
                    setData(temp);
                })
                .catch(error => {
                    console.log("error", error.message)
                })
        }
    }, [city])

    return (
        data ? <div className="weather-container">
            <div className="weather-icon">
                <img src={`https://openweathermap.org/img/wn/${data.icon.value}@4x.png`} alt='weather-icon' />
                <h2>{data.description.value}</h2>
            </div>
            <ul>{Object.keys(data).filter(k => k !== 'icon' && k !== 'description').map(k => <li key={k}>{`${k.toUpperCase()} = ${data[k].value} ${data[k].unit}`}</li>)
            }</ul>
        </div> : "No data to display"
    )
}

export default Home;