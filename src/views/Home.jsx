import React from 'react'
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from '../components/MyCard';
import Banner from '../components/Banner';


const Home = () => {

  const {data} = useContext(PizzasContext)

  return (
    <>
    <Banner/>
    <Container fluid>
    <Row>
    {
      data && 
      data.map((dataPizzas,index) => (
        <Col key={index} xs={12} md={3}><MyCard dpizzas={dataPizzas} /></Col>
      ))
    }
    </Row>
    </Container>
    </>
  )
}

export default Home
