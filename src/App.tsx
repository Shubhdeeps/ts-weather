
import { useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { getWeather } from './service/getServices';


function App(): JSX.Element {

  // useEffect(() => {
  //   getWeather();
  // }, [])

  return (
    <>
      <Header />
      <br />
      <Body />
    </>
  );
}

export default App;
