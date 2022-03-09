import create from 'zustand' 


const city = (set => ({
    city: {
        country: '',
        lat: '',
        lng: '',
        name: ''
    },
    setCity: (city) => 
        set(() => ({ city: city }) ),
    
}));

const theme = (set => ({
    theme: {
        primaryBG: '#7291C6',
        secondaryBG: '#E9C3C0',
        primary: '#7E6253',
        secondary: '#B7A1B5',
    },
    setTheme: (theme) => 
        set(() => ({ theme: theme }) ),
    
}));

const forecast = (set => ({
    forecast: [{
        dt: 0,
        temp: 0,
        weather: {
            main: '',
            description:  ''
        }
    }],
    setForecast: (forecast) => 
        set(() => ({ forecast: forecast }) ),
    
}));

const cities  = (set => ({
    cities: [{
        country: '',
        lat: '',
        lng: '',
        name: ''
    }],
    setCity: (city) => 
        set(() => ({ cities: city }) ),
    
}));

const pending = (set => ({
    isPending: false,
    setIsPending: (bool) => 
        set(() => ({ isPending: bool }) ),
    
}));

const ext = (set => ({
    isPending: false,
    setIsPending: (bool) => 
        set(() => ({ isPending: bool }) ),
    
}));

const weather = (set => ({
    weather: {
        country: '',
        timezone: 0,
        lat: '',
        lng: '',
        name: '',
        current: {
            clouds: 100,
            dt: 22,
            sunrise: 22,
            sunset: 20,
            feels_like: 10,
            humidity: 91,
            pressure: 1020,
            temp: -3,
            uvi: 0.37,
            wind_speed: 6.5,
            weather:{
                main: '',
                description: '',
            }
        },
        daily: [
            {
                temp: 0,
                weather: {
                    main: '',
                    description: '',
                }
            }
        ],
        hourly: [
            {
                temp: 0,
                dt: 0,
                weather: {
                    main: '',
                    description: '',
                }
            }
        ]
    },
    setWeather: (weather) => 
        set(() => ({ weather: weather }) ),
    
}));

export const useShortlistCities = create(cities);
export const useCityStore = create(city);
export const useIsPending = create(pending);
export const useIsExtend = create(ext);
export const useForecast = create(forecast);
export const useWeather = create(weather);
export const useTheme = create(theme);



