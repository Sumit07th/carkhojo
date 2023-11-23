import React from 'react'
import toast from "react-hot-toast";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart"

const Book = () => {
    const [cart, setCart] = useCart();
  return (
    <Layout>
        <h3>Click on confirm button for confirm your booking</h3>
        <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        
                        toast.success("Order placed sucesfully");
                      }}
                    >
                      CONFIRM
                    </button>
    </Layout>
  )
}

export default Book