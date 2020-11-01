import React from 'react'

function OrderCard(props) {
    return (
        <>
             <div className="card" style={{width: "85%"}}>
            <div className="card-body d-flex orderCard">
                <div className="col-lg-2">
                    <img src={props.imgsrc} className="img-fluid" alt={props.name} />
                </div>
                
                <div className="col-lg-4 orderDetail mt-2">
                    <p className="card-text orderName">{props.name} </p>
                    <p className="card-text orderColor">Color: {props.color} </p>
                    <p className="card-text orderColor">Seller: {props.seller} </p>
                </div>

                <div className="col-lg-2 mt-2">
                    <p className="card-text">₹ {props.price} </p>
                </div>
                
                <div className="col-lg-4 mt-2">
                    <p className="font-weight-bold"><span className={props.statusIcon}></span>{props.deliverDate} </p>
                    <p style={{fontSize:"12px",marginTop:"8px"}}>{props.status} </p>
                    <div className="d-flex">
                    <i className="fa fa-star mr-2 mt-1" aria-hidden="true" />
                    <p style={{color:"#2874f0"}}>RATE & REVIEW PRODUCT</p>
                    </div>
                </div>
             </div>
             </div>
        </>
    )
}

export default OrderCard
