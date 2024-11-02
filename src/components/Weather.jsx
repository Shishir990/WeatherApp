import { Alertbox } from "./Alertbox";
import styles from './Weather.module.css'
import { Image } from "react-bootstrap";
import wind from "../assets/wind.png"
import humidity from "../assets/humidity.png"
import Pressure from "../assets/Pressure.png"
import eye from "../assets/eye.png"
import { useEffect, useState } from "react";
import { fetchWeatherService, fetchByCity } from "../services/Weatherservice";


export function Weather() {
    const [weather, setWeather] = useState(null)
    const [weather1, setWeather1] = useState(null)
    const [city, setCity] = useState("")

    async function fetchWeather() {
        try {
            const result = await fetchWeatherService()
            setWeather(result)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])
    async function onhandleSubmit(e) {
        e.preventDefault();
        const result = await fetchByCity(city)
        setWeather1(result)
    }
    function onHandleChange(e) {
        setCity(e.target.value)
    }

    return (

        <div className={styles.parent}>

            <Alertbox></Alertbox>
            <div className={styles.SearchBox}>
                <form onSubmit={onhandleSubmit}>
                    <input type="text" placeholder="Enter city" onKeyUp={onHandleChange}></input><br></br>
                    <input className={styles.search} type="submit" value="Search"></input>
                </form>
            </div>
            {weather ? (
                <div className={styles.box}>
                    <div className={styles.container}>
                        <div className={styles.city}>
                            <h3>{weather1 ? weather1.location.name : weather.location.name}</h3>
                            <div className={styles.temp}>
                                <h5>Feels like {weather1 ? weather1.current.condition.text : weather.current.condition.text} </h5>
                                <Image src={weather1 ? weather1.current.condition.icon : weather.current.condition.icon} thumbnail /><br></br><br></br>
                            </div>
                            <h2>{weather1 ? weather1.current.temp_c : weather.current.temp_c}°C</h2>

                        </div>

                        <div className={styles.windspeed}>
                            <h2>Windspeed</h2><br></br>
                            <Image src={wind} thumbnail /><br></br><br></br>
                            <h2>{weather1 ? weather1.current.wind_kph : weather.current.wind_kph}kph</h2>
                        </div>
                        <div className={styles.Humidity}>
                            <h2>Humidity</h2><br></br>
                            <Image src={humidity} thumbnail /><br></br><br></br>
                            <h2>{weather1 ? weather1.current.humidity : weather.current.humidity}%</h2>
                        </div>
                        <div className={styles.Pressure}>
                            <h2>Pressure</h2><br></br>
                            <Image src={Pressure} thumbnail /><br></br><br></br>
                            <h2>{weather1 ? weather1.current.pressure_mb : weather.current.pressure_mb}mb</h2>
                        </div>
                        <div className={styles.Visibility}>
                            <h2>Visibility</h2><br></br>
                            <Image className="eye" src={eye} thumbnail /><br></br><br></br>
                            <h2>{weather1 ? weather1.current.vis_km : weather.current.vis_km}km</h2>
                        </div>
                    </div>

                </div>) : (<p>Loading</p>)}
        </div>

    );
}