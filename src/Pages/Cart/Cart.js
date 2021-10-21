import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      <h1>This is the cart page</h1>
    </div>
  );
};

export default Cart;
