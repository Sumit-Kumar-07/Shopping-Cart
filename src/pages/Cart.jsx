import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-center min-h-screen max-w-[1200px] mx-auto">
  {
    cart.length > 0  ? 
    (<div className="flex mt-[70px] max-md:flex-col">

      <div className=" flex flex-col w-[100%] md:w-[60%] p-2 divide-y-2 divide-slate-500">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col w-[100%] md:w-[40%] mt-[100px] px-5 mb-[70px]">
          <div className="uppercase font-semibold text-green-800 text-xl">Your Cart</div>
          <div className="uppercase text-5xl font-semibold text-green-700">Summary</div>
          <p className="text-gray-700 font-semibold text-xl my-5">Total Items: <span className="text-black font-bold">{cart.length}</span></p>
          <p className="text-gray-700 font-semibold text-xl">Total Amount: <span className="text-black font-bold">${totalAmount}</span></p>
          <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-200 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
            CheckOut Now
          </button>
      </div>

    </div>) : 

    (<div className="flex flex-col justify-center items-center gap-y-8">
      <h1 className="font-bold text-gray-700 text-xl select-none">Your cart is empty !</h1>
      <Link to={"/"}>
        <button className="bg-green-600 border-2 text-white uppercase font-bold px-10 py-3 rounded-lg border-green-600 hover:bg-white hover:text-green-600 transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
