import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('Bottle.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, [])


    const handleAddToCart = bottle => {
        const newItem = [...cart, bottle];
        setCart(newItem);
    }


    return (
      <div>
        <h2>All Bottles: {bottles.length}</h2>

        <h3>My Cart: {cart.length}</h3>

        <div className="bottle-container">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              handleAddToCart={handleAddToCart}
              bottle={bottle}
            ></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottles;