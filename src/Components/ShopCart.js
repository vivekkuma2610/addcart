import React from 'react'

function ShopCart({data={},handleClick,cart}) {
  return (

    <div className="col mb-5">
<div className="card h-100">
   
    <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
  
    <img className="card-img-top" src={data.product_image} alt="..." />
    
    <div className="card-body p-4">
        <div className="text-center">
       
            <h5 className="fw-bolder">{data.product_name}</h5>
           
            <span className="text-muted text-decoration-line-through">${data.actual_price}</span>
            ${data.price}
        </div>
    </div>
  
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
            <button  onClick={()=>handleClick(data)} 
            className={cart.find((item) => item.id === data.id) ? 'remove' : 'add'}
            >{cart.find((item) => item.id === data.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button></div>
    </div>
</div>
</div> 
    
  )
}

export default ShopCart

