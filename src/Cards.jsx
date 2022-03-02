import React from "react";
import "./index.css"


function Cards(props){
    return(
        <>
        <div className= "cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card_img" />

                <div className="card_info">

                    <span className="card_category">{props.title}</span>

                    <h2 className="card_title">{props.sname}</h2>

                    <a href={props.link}  target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}


export default Cards;