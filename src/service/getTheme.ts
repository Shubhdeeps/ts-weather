
export const getTheme = (main: string, discription: string, isDay: boolean) => {

    switch(main){
        case 'Clouds':
            if(discription === 'broken clouds' || discription === 'overcast clouds'){
                return {
                    primaryBG: '#222C35',
                    secondaryBG: '#A5B5C2',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            }else{
                if(isDay){
                    return {
                        primaryBG: '#0F72B8',
                        secondaryBG: '#010E45',
                        primary: '#7E6253',
                        secondary: '#B7A1B5',
                    }
                }else{
                    return {
                        primaryBG: '#3F3F3F',
                        secondaryBG: '#D7D3C9',
                        primary: '#7E6253',
                        secondary: '#B7A1B5',
                    }
                } 
            }
        case 'Clear':
            if(isDay){
                return {
                    primaryBG: '#3C80C9',
                    secondaryBG: '#FEA05B',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            }else{
                return {
                    primaryBG: '#09030F',
                    secondaryBG: '#8D446E',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            } 
        case 'Snow':
            if(isDay){
                return {
                    primaryBG: '#ADD1EE',
                    secondaryBG: '#DDE8F7',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            }else{
                return {
                    primaryBG: '#092B8D',
                    secondaryBG: '#6E64AB',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            } 
        case 'Rain':
            if(isDay){
                return {
                    primaryBG: '#F2E9DF',
                    secondaryBG: '#B3A9A0',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            }else{
                return {
                    primaryBG: '#3B6AA6',
                    secondaryBG: '#7CC9F9',
                    primary: '#7E6253',
                    secondary: '#B7A1B5',
                }
            } 
        case 'Drizzle':
            return {
                primaryBG: '#1B2B38',
                secondaryBG: '#606467',
                primary: '#7E6253',
                secondary: '#B7A1B5',
            }
        case 'Thunderstorm':
            return {
                primaryBG: '#3F2155',
                secondaryBG: '#E9B5ED',
                primary: '#7E6253',
                secondary: '#B7A1B5',
            }
        default:
            return {
                primaryBG: '#8B8B93',
                secondaryBG: '#6E7153',
                primary: '#7E6253',
                secondary: '#B7A1B5',
            }
    }
}
