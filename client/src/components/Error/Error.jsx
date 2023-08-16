import React from "react";
import "./Error.scss";
import star2 from "../../assets/star2.svg";
import star1 from "../../assets/star.svg";

const Error = () => {
  return (
    <div className="Error">
        <div class="Error_content">
            <img src={star2} alt="star" className="starImg2" />
                <div class="glitch-effect">ERROR 404 <br /> NOT FOUND
                    <div class="glitch-text">
                        <div class="glitch-text-1">ERROR 404 <br /> NOT FOUND</div>
                    </div>
                    <div class="glitch-text">
                        <div class="glitch-text-2">ERROR 404 <br /> NOT FOUND</div>
                    </div>
                </div>
            <img src={star1} alt="star" className="starImg1" />  
        </div>
    </div>
  );
};

export default Error;
