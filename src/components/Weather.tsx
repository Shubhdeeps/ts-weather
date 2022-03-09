import React, { useEffect } from "react"
import Lottie from "lottie-react";
import { Container } from "react-bootstrap";
import { styles } from "../stylesheet/styles";
import { useTheme, useWeather } from "../store/store";
import { getLottie } from "../service/getLottieSrc";
import { getTime } from "../service/timeService";
import { getTheme } from "../service/getTheme";



const Weather: React.FC = (): JSX.Element => {
    const weather = useWeather(state => state.weather);
    const setTheme = useTheme(state => state.setTheme);
    const mS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const getDay = (): boolean => {
      if(weather.current.dt > weather.current.sunrise && weather.current.dt < weather.current.sunset){
        return true
      }else{
        return false
      }
    }

    useEffect(() => {
      setTheme(getTheme(weather.current.weather.main, weather.current.weather.description, getDay()))
    }, [weather])
   

    
    return(
        <Container  style={styles.containerDiv} className='pt-5'>
             <div className="d-flex flex-row justify-content-between">
                 <div className="d-flex flex-column align-items-center" style={styles.innerContainer}>
                    <div style={{width: '20vh'}}>
                    <Lottie 
                        loop={true}
                        animationData={getLottie(weather.current.weather.main, weather.current.weather.description, getDay())}
                    />
                    </div>
                    <div style={styles.fontLg}> {weather.current.weather.description} </div>

                 </div>
                 <div className="d-flex flex-column align-items-center" style={styles.innerContainer}>
                 <div  style={styles.fontXl} >{weather.name}, {weather.country}</div>
                 <div className="align-self-end" style={styles.fontMd}>
                   {mS[getTime(weather.timezone + weather.current.dt).getMonth()]}{' '}
                  {getTime(weather.timezone + weather.current.dt).getDate()},{' '}
                   {getTime(weather.timezone + weather.current.dt).getFullYear()}
                 </div>
                 <div style={styles.fontLg} className="align-self-end">{Math.round(weather.current.temp)}°</div>
                    <div style={styles.fontMd} className="align-self-end">Feels like {Math.round(weather.current.feels_like)}°</div>
                    <div style={styles.fontMd} className="align-self-end">Pressure {weather.current.pressure} mb</div>
                    <div style={styles.fontMd} className="align-self-end">Humidity {weather.current.humidity}%</div>
                    <div style={styles.fontMd} className="align-self-end">UV Index {weather.current.uvi}</div>
                 </div>
             </div>
        </Container>
        )
}

export default Weather