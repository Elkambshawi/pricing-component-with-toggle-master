import React from "react";
import './Price-list.css'
import Title from "./Title";

function PricingList (props) {

    
    return (
        <div className="container">
            <div className="pricing-list">
                <div className="price-list">
                    <p>Basic</p>
                    <h2>$ {props.firstprice}</h2>
                    <ul>
                        <li>500 GB Storage</li>
                        <li>2 users Allowed</li>
                        <li>Send Up To 3 GB</li>
                    </ul>
                    <button>Learn Now</button>
                </div>
                <div className="price-list">
                    <p>Basic</p>
                    <h2>$ {props.secondprice}</h2>
                    <ul>
                        <li>1 TB Storage</li>
                        <li>5 users Allowed</li>
                        <li>Send Up To 10 GB</li>
                    </ul>
                    <button>Learn Now</button>
                </div>
                <div className="price-list">
                    <p>Basic</p>
                    <h2>$ {props.thirdprice}</h2>
                    <ul>
                        <li>2 TB Storage</li>
                        <li>10 users Allowed</li>
                        <li>Send Up To 20 GB</li>
                    </ul>
                    <button>Learn Now</button>
                </div>
            </div>
        </div>
    )
}

export default PricingList;