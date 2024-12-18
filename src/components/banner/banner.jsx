import React from "react";
import "../../style/banner.scss";

function Banner({video}) {
    return (
        <div id="banner">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />  
            </video>
        </div>
    );
}

export default Banner;