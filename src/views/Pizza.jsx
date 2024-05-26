import React from 'react'
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";
import { useParams } from 'react-router';

const Pizza = () => {

    const { id } = useParams()
    const {data, agregaPizza_a_carro} = useContext(PizzasContext)

    return (
    <>
    {   
        data &&
        data.map((detallepizza, index) => {
            if (detallepizza.id == id) {
                return (
                    <div key={"a" + {index}} className="card mt-3">
                        <div key={"b" + {index}} className="row g-0">
                            <div key={"c" + {index}} className="col-md-4">
                                <img src={detallepizza.img} className="img-fluid rounded-start" alt={detallepizza.name}/>
                            </div>
                            <div key={"d" + {index}} className="col-md-8">
                                <div key={"e" + {index}} className="card-body">
                                    <h5 className="card-title">{detallepizza.name}</h5>
                                    <p className="card-text">{detallepizza.desc}</p>
                                    <b>ingredientes:</b>
                                    <ul className='estilo_ul'>
                                    {detallepizza.ingredients.map((ingrediente,index) => (
                                        <li key={index}>🍕 {ingrediente}</li> 
                                    ))}
                                    </ul>
                                    <div key={"f" + {index}} className='d-flex justify-content-between'>
                                        <h2>Precio: ${detallepizza.price}</h2>
                                        <button type="button" onClick={() => agregaPizza_a_carro(detallepizza)} className="btn btn-danger ms-1">Añadir 🛒</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    </>
    )
}

export default Pizza