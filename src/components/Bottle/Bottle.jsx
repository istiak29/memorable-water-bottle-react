import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
//   console.log(bottle);
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img} alt="Bottle" />
      <h4>Price: {price}$</h4>
      <button onClick={() => handleAddToCart(bottle)}>Purchases</button>
    </div>
  );
};

export default Bottle;
