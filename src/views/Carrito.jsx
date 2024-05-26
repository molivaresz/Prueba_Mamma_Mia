import React, { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContextProvider'

const Carrito = () => {
    const {carro, increase, decrease} = useContext(PizzasContext)
    const total = carro.reduce((a,{ count, price }) => a + price * count, 0);

    return (
      <div className='p-5'>
          <div className='detalles bg-light w-75 m-auto p-5'>
              <h5>Detalles del pedido:</h5>
              <div className='p3 bg-white'>
                  {carro.map((pizzacarro,index) => (
                      <div key={index} className='d-flex justify-content-between py-2'>
                          <div className='d-flex justify-content-between align-items-center'>
                              <img src={pizzacarro.img} width="50" alt='' />
                              <h6 className='mb-0 text-capitalize p-2'>{pizzacarro.name}</h6>
                          </div>
                          <div className='d-flex justify-content-end align-items-center'>
                              <h6 className='mb-0 p-2 text-success'>${pizzacarro.price * pizzacarro.count}</h6>
                              <button className='btn btn-danger' onClick={() => decrease(index)}> - </button>
                              <b className='mx-2'>{pizzacarro.count}</b>
                              <button className='btn btn-primary' onClick={() => increase(index)}> + </button>
                          </div>
                      </div>
                  ))}
                  <h2 className='my-4'>🛒$ {total.toLocaleString("de-DE")}</h2>
                  <button className='btn btn-success'>Ir a Pagar</button>
              </div>
          </div>
      </div>
    )
}

export default Carrito
