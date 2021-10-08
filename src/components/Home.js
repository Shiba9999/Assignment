import React from 'react'
import "./Home.css"
import Products from './Products'


function Home() {

    return (
        <div className="home">
  
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/revisedT2/Header_PC_Teaser-2_English.jpg"
                    alt=""
                />
              <div className="home__row">
                  <Products/>
                </div>
              
            </div>
        </div>
    )
}

export default Home
