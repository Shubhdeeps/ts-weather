
export interface DCITY{ 
    country: string,
    lat: string,
    lng: string,
    name: string
  }

export interface HOURDAY{
    temp: number;
    dt: number;
    weather: {
        main: string;
        description: string;
    };
}

export interface WEATHER{
    country: string;
    timezone: number;
    lat: string;
    lng: string;
    name: string;
    current: {
        clouds: number;
        dt: number;
        sunrise: number;
        sunset: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        uvi: number;
        wind_speed: number;
        weather: {
          main: string;
          description: string;
      };
    };
  hourly: HOURDAY[];
  daily: HOURDAY[];
}