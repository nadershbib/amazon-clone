import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className='home__image'/>
          
     
        <div className="home__row">






           <Product id='123455' title="Motorola Razr" 
           price={129.99}
           rating={4.5}
           image='https://m.media-amazon.com/images/I/41GaUT3T5WL._AA210_.jpg'

           />
           <Product id='99445' title="Razer Gaming" 
           price={20}
           rating={4.5}
           image='https://m.media-amazon.com/images/I/41AvnWECixL._AA210_.jpg'

           />
        </div>


         <div className="home__row">




           <Product id='16598' title="JBL Headphones" 
           price={60}
           rating={4.5}
           image='https://m.media-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1268552_1379051_US_3382001_500x500_en_US._AA210_.jpg'

           />
           <Product id='143255' title="Samsung QLED Tv" 
           price={1000}
           rating={5}
           image='https://m.media-amazon.com/images/I/41wRWxMSX6L._AA210_.jpg'

           />
           <Product id='424543' title="MacBook Pros Apple 2019" 
           price={1100}
           rating={5}
           image='https://m.media-amazon.com/images/I/51gVXzLnUbL._AA210_.jpg'

           />


         </div> 

         <div className="home__row">

           <Product id='34242' title="LG 27 QN880" 
           price={920}
           rating={5}
           image='https://m.media-amazon.com/images/I/41q9KdrsPaL._AA210_.jpg'

           />

         </div>


        </div>
    )
}

export default Home;
