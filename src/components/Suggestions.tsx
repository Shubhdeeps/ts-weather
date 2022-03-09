import React from "react";
import { Card, Container } from "react-bootstrap";
import { useCityStore, useIsExtend, useIsPending, useShortlistCities } from "../store/store";


const Suggestions: React.FC = (): JSX.Element => {
    const pending = useIsPending(state => state.isPending);
    const setExtend = useIsExtend(state => state.setIsPending);
    const extend = useIsExtend(state => state.isPending)
    const cities = useShortlistCities(state => state.cities);
    const setCity = useCityStore(state => state.setCity);

    const renderCities = (): JSX.Element | JSX.Element[] => {
        // to ensure city would not be empty
            if(cities[0].name === 'Not Found' ){
                return(<> City Not Found </>)
            }
           return cities.map((item, index) => {
            return(<p id='clickables' key={`${item.name}${index}`}  onClick={() => handleCityClick(item)}> {item.name}, {item.country} </p>)
          })
      }

      const handleCityClick = (item: {
        country: string;
        lat: string;
        lng: string;
        name: string;
    }) => {
        setCity(item);
        setExtend(false);
      }
    return(
        <Container className="d-flex justify-content-end">
        <div style={{ width: '14.3rem', position:'absolute', zIndex: 2}}>
            {pending && <Card> 
            <Card.Body> Loading... </Card.Body>
            </Card>}
            {cities && (cities[0].name !== '')  && extend && !pending && <Card>
                <Card.Body>{renderCities()}</Card.Body>
            </Card>}
        </div>     
    </Container>
    )
}

export default Suggestions;