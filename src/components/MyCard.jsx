import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";


const MyCard = (props) => {

    const navigate = useNavigate()
    const {agregaPizza_a_carro} = useContext(PizzasContext)

    const hClick = (id) => {
        navigate(`/pizza/${id}`)
    }

    return (
        <>
        <Card key={"c" + props.id}>
            <Card.Img key={"ci" + props.dpizzas.id} variant="top" src={props.dpizzas.img} />
            <Card.Body key={"cb" + props.dpizzas.id}>
                <Card.Title className='border-bottom border-secondary' key={"ct" + props.dpizzas.id}>{props.dpizzas.name}</Card.Title>
                <div className='border-bottom border-secondary' key={"ctxt" + props.dpizzas.id}>
                    <b>ingredientes:</b>
                    <ul className='estilo_ul'>
                    {props.dpizzas.ingredients.map((ingrediente,index) => (
                        <li key={index}>🍕 {ingrediente}</li> 
                    ))}
                    </ul>
                </div>
                <div className='text-center'>
                    <h2>${props.dpizzas.price}</h2>

                    <button type="button" onClick={() => hClick(props.dpizzas.id)} className="btn btn-info me-1">Ver Más 👀</button>
                    <button type="button" onClick={() => agregaPizza_a_carro(props.dpizzas)} className="btn btn-danger ms-1">Añadir 🛒</button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

    export default MyCard