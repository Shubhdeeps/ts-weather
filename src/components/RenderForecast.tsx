import React, { useEffect, useState } from "react";
import { getTime } from "../service/timeService";
import { useForecast, useWeather } from "../store/store";
import Lottie from "lottie-react";
import { styles } from "../stylesheet/styles";
import { getLottie } from "../service/getLottieSrc";

interface RFOR {
    isOpen: boolean;
}

const RenderForecast:React.FC<RFOR> = (isOpen) => {
    const weather = useWeather(state => state.weather);
    const forecast = useForecast(state => state.forecast);
    const [numb, setNumb] = useState(1);
    const width = window.innerWidth;
    const totalElementRenders: number = width > 520 ? 4 : 2;

    let newForecast = forecast;

    useEffect(() => {
        setNumb(1);
        
    }, [isOpen])

    const renderIsDay = (number: number): boolean => {
        if(isOpen.isOpen && newForecast.length > 1){
            return (getDayBool(getTime(forecast[number].dt).getHours()));
        }else{
            return true
        }
    }

    const getDayBool = (dt: number): boolean => {
        if(dt >= getTime(weather.current.sunrise).getHours() && dt < getTime(weather.current.sunset).getHours()){
          return true
        }else{
          return false
        }
      }


    function tConvert (time: any) {
          const format = time < 12 ? 'AM' : 'PM'; // Set AM/PM
          const tm = +time % 12 || 12; // Adjust hours
        return `${tm}${format}` // return adjusted time or original string
    }

    const getWeekDay = (i: number) => {
        const weekDay = getTime(weather.current.dt + weather.timezone).getDay()
        const wD = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        i = i + weekDay + numb - 1 ;

        if(i >= 7){
            i = i - 7;
        }

        return wD[i]
    }

    const handleNext = () => {
        if(numb < forecast.length - totalElementRenders){
            setNumb(numb + 1);
        }
    }

    const handlePrev = () => {
        if(numb > 0){
            setNumb(numb - 1);
        }
    }

     

    return(
        <>
        <div style={{width: '60px', height: '60px'}}  onClick={() => handlePrev()}>
            <svg  width="28" height="38" viewBox="0 0 28 38" fill="none">
            <path id='moveBtn' d="M22.6721 0L28 4.465L10.6937 19L28 33.535L22.6721 38L0 19L22.6721 0Z" fill="white"/>
            </svg>
        </div>
        
        {newForecast.slice(numb, numb + totalElementRenders).map((item, index)=> {
            return(
                <div key={index} className='d-flex flex-column align-items-center justify-content-between'>
                    <br />
                    {item.dt ? <h5>{tConvert(`${getTime(item.dt + weather.timezone).getHours()}`)}</h5>:
                    <h5>{getWeekDay(index)}</h5>
                    }
                    <div style={styles.lottieSize}> 
                        <Lottie 
                        loop={true}
                        animationData={getLottie(item.weather.main, item.weather.description, renderIsDay(numb + index))} 
                        />
                    </div>
                    <div>{Math.round(item.temp)}°</div>
                    <div>{item.weather.description}</div>
                    <br />
                </div>
            )
        })}
         <div style={{width: '60px', height: '60px'}}  onClick={() => handleNext()}>
            <svg  width="30" height="38" viewBox="0 0 30 38" fill="none">
            <path id='moveBtn' d="M5.7085 0L0 4.465L18.5425 19L0 33.535L5.7085 38L30 19L5.7085 0Z" fill="white"/>
            </svg>
        </div>
        </>
    )
}


export default RenderForecast;