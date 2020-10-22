import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({item,title,image,price,rating,id}) {

   const [{},dispatch] = useStateValue(); 

   const removeFromBasket = itemId =>{
    
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,

    });

   }

    return (
        <div className="checkoutProduct">
           <img src={image} alt="" className="checkoutProduct__image"/>

           <div className="checkoutProduct__info">
           <p className="checkOutProduct__title">{title}</p>

           <p className="checkoutProduct__price">
               <small>$</small>
               <strong>{price}</strong>
           </p>

           <div className="checkoutProduct__rating">
                
                  {Array(Math.floor(rating)).fill().map(_=><p>⭐</p>)} 
              
             
         </div>

           <button onClick={()=>removeFromBasket(id)}>Remove from basket</button>
           </div>
            
        </div>
    )
}

export default CheckoutProduct;


