import React from 'react'

function Cart() {
    document.title = "My Cart";
    return (
        <>
            <div className="fullCart">
            <div className="card" style={{width: "85%",height:"50%"}}>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">My Cart</h5>
                <div className="text-center">
                <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' className="img-fluid" style={{height:"162px"}} alt="" />
                <h6 style={{fontSize:"18px"}}>
                Your cart is empty!
                </h6>
                <p style={{fontSize:"12px"}}>
                It's a good day to buy the items you saved for later!
                </p>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Cart
