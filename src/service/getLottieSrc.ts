import clear_day from '../lottie/clear_day.json'
import day_snow from '../lottie/day_snow.json'
import partial_clouds from '../lottie/partial_clouds.json'
import party_shower_day from '../lottie/party_shower_day.json'


import clear_night from '../lottie/clear_night.json'
import night_snow from '../lottie/night_snow.json'
import party_cloud_night from '../lottie/party_cloud_night.json'
import party_shower_night from '../lottie/party_shower_night.json'

import mist from '../lottie/mist.json'
import clouds from '../lottie/clouds.json'
import thunder from '../lottie/thunder.json'
import thunder_rain from '../lottie/thunder_rain.json'


export const getLottie = (main: string, discription: string, isDay: boolean) => {

    switch(main){
        case 'Clouds':
            if(discription === 'broken clouds' || discription === 'overcast clouds'){
               
                return clouds;
            }else{
                if(isDay){
                    return partial_clouds;
                }else{
                    return party_cloud_night;
                } 
            }
        case 'Clear':
            if(isDay){
                return clear_day;
            }else{
                return clear_night;
            } 
        case 'Snow':
            if(isDay){
                return day_snow;
            }else{
                return night_snow;
            } 
        case 'Rain':
            if(isDay){
                return party_shower_day;
            }else{
                return party_shower_night;
            } 
        case 'Drizzle':
            return thunder_rain;
        case 'Thunderstorm':
            return thunder;
        default:
            return mist;   
    }
}
