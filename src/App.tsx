
import { useEffect } from 'react';
import './stylesheet/App.css';
import Body from './components/Body';
import Header from './components/Header';
import { getWeather } from './service/getServices';
import { useCityStore, useTheme, useWeather } from './store/store';

function App(): JSX.Element {
  const city = useCityStore(state => state.city)
  const setCity = useCityStore(state => state.setCity)
  const setWeather = useWeather(state => state.setWeather);
  const theme = useTheme(state => state.theme);

  useEffect(() => {

    if(city.name !== ''){
      (async function fetchData () { 
        await getWeather(city, setWeather)
        setCity({
          country: '',
          lat: '',
          lng: '',
          name: ''
      })
      })()
    }
  }, [city])

  
  const styles = {
    section: {
      height: '100%',
      width: '100%',
      background:` linear-gradient(180deg, ${theme.primaryBG} 0%, ${theme.secondaryBG} 100%)`,
    }
  }

  return (
    <section style={styles.section}>
      <Header />
      <Body />
    </section>
  );
}

export default App;
