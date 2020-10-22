import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {

const [{basket},dispatch] = useStateValue();


    return (
        <div className="checkout">
          <div className="checkout__left">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/landingpage/Q4_2020_HolidayDash_LandingPage_Desktop_Stripe_1500x80.png" alt="" className="checkout__ad"/>

          {basket?.length === 0 ?(
              <div>
                  <h2>Your shopping basket is Empty</h2>
                  <p>You have no items in your basket. To buy one or "Add to basket" next to the item.</p>
              </div>
          ):(
              <div>
                
                  <h2 className='checkout__title'>Your Shopping Basket</h2>
                 {
                 basket.map((item)=>(

                 <CheckoutProduct item={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} id={item.id} />
               
                 ) )
                 } 
                 
                </div> 
                 


          ) }   

               </div>
               
                 {basket.length > 0 && (
                     <div className="checkout__right">

                         <Subtotal />
                        
                         
                     </div>
                 )}

              

      </div>
    )
}

export default Checkout
