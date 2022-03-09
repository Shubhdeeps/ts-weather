import { Container } from "react-bootstrap"
import { styles } from "../stylesheet/styles";
import { useForecast, useWeather } from "../store/store";
import { useEffect, useState } from "react";
import RenderForecast from "./RenderForecast";

const Forecast = () => {
  
    const [isOpen, setIsOpen] = useState(true);
    const setForecast = useForecast(state => state.setForecast);
    const weather = useWeather(state => state.weather);

    useEffect(() => {
        setForecast(weather.hourly);
    }, [weather.country])

    const handleHourly = () => {
        setIsOpen(true);
        setForecast(weather.hourly);
    }
    const handleDaily = () => {
        setIsOpen(false);
        setForecast(weather.daily);
    }

      
    return(<Container>
        <div style={styles.borderBottom} className='d-flex flex-row justify-content-center'>
           <h2 id='btn' className='me-5 p-2' style={isOpen ? {color: '#D5FF00'} : {color: 'white'}} onClick={() => handleHourly()}>Hourly</h2>
           <h2 id='btn' className='p-2'  style={isOpen ? {color: 'white'} : {color: '#D5FF00'}} onClick={() => handleDaily()}>Daily</h2>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-around'>
        <RenderForecast isOpen={isOpen}/>
        </div>
        </Container>)
}

export default Forecast