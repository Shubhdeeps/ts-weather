import React, { useEffect } from "react";
import {  Container, Navbar } from "react-bootstrap";
import { getCities } from "../service/getServices";
import Suggestions from "./Suggestions";
import { useIsExtend, useIsPending, useShortlistCities } from "../store/store";


const Header: React.FC = (): JSX.Element => {
    const width = window.innerWidth;
    const setShortListCities = useShortlistCities(state => state.setCity);
    const cities = useShortlistCities(state => state.cities)
    const setPending = useIsPending(state => state.setIsPending);
    const setExtend = useIsExtend(state => state.setIsPending);

    const emptyCities = [{
        country: '',
        lat: '',
        lng: '',
        name: ''
    }]

    useEffect(() => {
        if(cities[0].name !== '' && cities.length === 1)
            setPending(false)
    }, [cities])



    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShortListCities(emptyCities);
        setPending(true);

        if(e.target.value.length === 0){
            setShortListCities(emptyCities);
            setPending(false);
            setExtend(false);
        }
        else if(e.target.value.length > 0){
             setExtend(true);
             getCities(e.target.value, setShortListCities, setPending)
         } 
      }
    
    return(<>
        <Navbar bg="light">
        <Container className={width > 550 ? '' : 'd-flex flex-column align-items-start'}>
          <Navbar.Brand href="#home">World Weather</Navbar.Brand>
          <div style={{width: '14.3rem', border: '1px solid grey', borderRadius: '15px'}}>
            <input 
            style={{width: '12rem', background: 'none', border: 'none', height: '2rem', }}
            onChange={(e) => handleChange(e)} 
            type='text'
            className="ms-2"
            placeholder="Search"
            />
            <svg width="20" height="20" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 44H46.84L45.72 42.92C49.64 38.36 52 32.44 52 26C52 11.64 40.36 0 26 0C11.64 0 0 11.64 0 26C0 40.36 11.64 52 26 52C32.44 52 38.36 49.64 42.92 45.72L44 46.84V50L64 69.96L69.96 64L50 44V44ZM26 44C16.04 44 8 35.96 8 26C8 16.04 16.04 8 26 8C35.96 8 44 16.04 44 26C44 35.96 35.96 44 26 44Z" fill="black"/>
            </svg>
          </div>
        </Container>
      </Navbar>
         <Suggestions />
    </>
    )
} 



export default Header;