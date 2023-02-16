import React, { useEffect, useState } from "react";
import PricingList from "./Price-list";
import './Title.css'

function Title () {

    const [price, setPrice] = useState(['19.99', '19.99', '19.99']);

    
    const clickHandler = () => {

        const btnIcon = document.getElementById('btnicon');
        btnIcon.classList.toggle('left')

        if (btnIcon.classList.contains('left')) {
            setPrice (['199.99', '249.99', '399.99'])
            console.log(price)
        } else {
            setPrice (['19.99', '24.99', '39.99'])
            console.log(price)
            }
    }

    return (
        <>
            <section className="pricing-component">
                <h3>Our Pricing</h3>
                <div className="btn">
                    <p>Annually</p>
                    <span id="btnicon" onClick={clickHandler}></span>
                    <p>Monthly</p>
                </div>
            </section>
            
            <PricingList firstprice={price[0]} secondprice={price[1]} thirdprice={price[2]} />
        </>
    )
}

export default Title;