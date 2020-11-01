import React from 'react'

function WishItems(props) {
    return (
        <div>
            <hr />
             <div className="wishDiv d-flex mt-4">
                <img src={props.imgsrc} alt="Nothing Found" className="img-fluid ml-4 col-lg-1.5" />
                    <div className="cardContent col-lg-8">
                        <div className="d-flex justify-content-between">
                        <a href="/" className="card-text wishText">
                            {props.title} 
                        </a>    
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                        <p className="starP px-1">{props.ratings} <i className="fa fa-star" style={{color:"white"}} aria-hidden="true"></i></p>
                        <h4 className="font-weight-bold">₹{props.price}</h4>
                    </div>
                </div>
        </div>
    )
}

export default WishItems
