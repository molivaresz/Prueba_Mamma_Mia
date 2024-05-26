import { Link } from "react-router-dom";
import { useContext } from "react";
import {PizzasContext} from "../context/PizzasContextProvider";

const Navbar = () => {

    const { carro } = useContext(PizzasContext);
    const total = carro.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <nav className="navbar d-flex justify-content-between">
            <Link className="opciones ms-4" to="/">🍕Pizzería Mamma Mia!</Link>
            <Link className="opciones me-4" to="/Carrito">{total != 0 ? "😋" : ""}🛒${ total.toLocaleString("de-DE")}</Link>
        </nav>
    );
};

export default Navbar;