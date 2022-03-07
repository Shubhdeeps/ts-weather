import React, { useEffect, useState } from "react";
import { Card, Container, Navbar } from "react-bootstrap";
import { getCities } from "../service/getServices";
import { DCITY } from "../modals/Modals";

interface CITY{
    city:  DCITY[] | null,
}

interface HEAD extends CITY{
    setCity: React.Dispatch<React.SetStateAction<DCITY[] | null>>
}

interface ISPEND extends CITY{
    pending: boolean
}




const Header: React.FC = (): JSX.Element => {
    const [city, setCity] = useState<DCITY[] | null>(null);
    const [pending, setPending] = useState<boolean>(false);

    useEffect(() => {
        if(city)
        setPending(false)
    }, [city])



    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.length)

        setCity(null);
        setPending(true);

        if(e.target.value.length === 0){
            setCity(null);
            setPending(false);
         }
         else if(e.target.value.length > 0){
             getCities(e.target.value, setCity, setPending)
         } 
      }
    
    return(<>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">World Weather</Navbar.Brand>
          <input 
          onChange={(e) => handleChange(e)} 
          type='text'
          className="br-4"
          />
        </Container>
      </Navbar>
      <ExtensionCard city={city} pending={pending} />
    </>
    )
} 

const ExtensionCard: React.FC<ISPEND> = ({ city, pending }) => {
    const renderCities = () => {
        // to ensure city would not be empty
        if(city){
            if(city[0].name === 'Not Found' ){
                return(<> City Not Found </>)
            }
           return city.map(item => {
            return(<p key={item.name}> {item.name}, {item.country} </p>)
          })
        }
      }

    return(
        <Container>
            {pending && <Card> <Card.Body> Loading... </Card.Body></Card>}
            {city && !pending && <Card>
                <Card.Body>{renderCities()}</Card.Body>
            </Card>}
        </Container>
    )
}

export default Header;