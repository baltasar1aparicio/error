import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
        <button className='cartButton'> <BsCartCheckFill /> </button>
    </div>
  )
}

export default CartWidget