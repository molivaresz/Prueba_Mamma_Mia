import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import PizzasContextProvider from "./context/PizzasContextProvider";
import Pizza from './views/Pizza';


const App = () => {
  return (
    <>
      <PizzasContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pizza/:id" element={<Pizza />}/>
        <Route path="/Carrito" element={<Carrito />}/>
      </Routes>
      </PizzasContextProvider>
    </>
  );
};

export default App;
