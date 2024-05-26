import { createContext, useEffect, useState} from "react";

export const PizzasContext = createContext();

const PIZZA_URL = "/pizzas.json";

const PizzasContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [carro, setCarro] = useState([])
    
    const getPizzas = async () => {
        try {
            const response = await fetch(PIZZA_URL);
            const dataPizzas = await response.json();

            setData(dataPizzas)
        } catch (error) {
            console.log(error);
        }
    };

    const agregaPizza_a_carro = ({ id, price, name, img }) => {
        const productoEncontradoIndex = carro.findIndex((prod) => prod.id === id);
        const producto = { id, price, name, img, count: 1 };
    
        if (productoEncontradoIndex >= 0) {
            carro[productoEncontradoIndex].count++;
            setCarro([...carro]);
        } else {
            setCarro([...carro, producto]);
        }
    }

    const increase = (idx) => {
        const nuevo_Carro = [...carro];
        nuevo_Carro[idx].count++;
        setCarro(nuevo_Carro);
    };

    const decrease = (idx) => {
        const nuevo_Carro = [...carro];
        const { count } = nuevo_Carro[idx];
        if (count === 1) {
            nuevo_Carro.splice(idx, 1);
        } else {
            nuevo_Carro[idx].count--;
        }
        setCarro(nuevo_Carro);
    };

    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <PizzasContext.Provider value={{data, setData, carro, setCarro, agregaPizza_a_carro, increase, decrease}}>
            {children}
        </PizzasContext.Provider>
    );
}
export default PizzasContextProvider