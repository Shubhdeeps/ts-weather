import axios from "axios"

interface DCITY{ 
    country: string,
    lat: string,
    lng: string,
    name: string
  }
interface WEATHER{
    dt: number,
    temp: {
      day: number
    },
    weather: [{
        main: string,
        description: string,
    }]
} 

interface DAILY{
  temp: number,
  weather: {
    main: string,
    description: string
  }
}

interface HOURLY extends DAILY {
  dt: number
}

export const getCities = (city: string, setShortListCities: React.Dispatch<React.SetStateAction<DCITY[] | null>>, setPending: React.Dispatch<React.SetStateAction<boolean>>) => {
    axios.get(`${process.env.REACT_APP_CITY_URL}${city.toLowerCase()}`)
    .then(response => setShortListCities(response.data))
    .then(() => setPending(false))
}

export const getWeather = (city: DCITY, setWeather: any) => {
  const key = process.env.REACT_APP_KEY
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lng}&exclude=minutely&units=metric&appid=${key}`)
  .then(res => {

    const dailyArr: DAILY = res.data.daily.map((x: WEATHER) => {
      return({
        temp: x.temp.day,
        weather: {
            main: x.weather[0].main,
            description: x.weather[0].description,
        }
      })
    })

    const hourlyArr: HOURLY = res.data.hourly.map((x: WEATHER) => {
      return({
        dt: x.dt,
        temp: x.temp,
        weather: {
          main: x.weather[0].main,
          description: x.weather[0].description
        }
      })
    })

    const data =  {
      ...city,
      timezone: res.data.timezone_offset,
      current: {
          clouds: res.data.current.clouds,
          dt: res.data.current.dt,
          sunrise: res.data.current.sunrise,
          sunset: res.data.current.sunset,
          feels_like: res.data.current.feels_like,
          humidity: res.data.current.humidity,
          pressure: res.data.current.pressure,
          temp: res.data.current.temp,
          uvi: res.data.current.uvi,
          wind_speed: res.data.current.wind_speed,
          weather: {
              main: res.data.current.weather[0].main,
              description: res.data.current.weather[0].description,
          }
      },
      daily: dailyArr,
      hourly: hourlyArr,
  }
     setWeather(data);
  })
}