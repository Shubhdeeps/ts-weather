import axios from "axios"

interface DCITY{ 
    country: string,
    lat: string,
    lng: string,
    name: string
  }

export const getCities = (city: string, setCity: React.Dispatch<React.SetStateAction<DCITY[] | null>>, setPending: React.Dispatch<React.SetStateAction<boolean>>) => {
    axios.get(`https://infinite-beyond-83539.herokuapp.com/${city.toLowerCase()}`)
    .then(response => setCity(response.data))
    .then(() => setPending(false))
}

export const getWeather = () => {
  const key = 'bc59d6063595d36b9cf6c34f210f86bf'
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&units=metric&appid=${key}`)
  .then(res => console.log(res.data))
}