import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  return (
    <div className='row container-size-img'>
        <img src={item.imagen} className='size-img' alt={item.nombre} />
        <h3> {item.nombre} </h3>
        <p> {item.descripcion} </p>
        <p>$ {item.precio} </p>
        <p>Stock: {item.stock} </p>
    </div>
  )
}

export default ItemDetail
