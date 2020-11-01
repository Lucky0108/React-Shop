import React from 'react'
import HelloCard from './HelloCard'
import WishItems from './WishCard';
import Wdata from './WData';

function Wishlist() {
    document.title = "My Wishlist";
    return (
        <>
            <div className="fullWishlist">
            <HelloCard />

            <div className="card" style={{width: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold" style={{fontSize:"17px"}}>My Wishlist ({Wdata.length}) </h5>
                    {
                        Wdata.map((val,index)=>{
                            return(
                                <WishItems
                                    key = {index}
                                    imgsrc = {val.imgsrc}
                                    title = {val.title}
                                    price = {val.price}
                                    ratings = {val.rating}
                                />
                            )
                        })
                    }
                   
                </div>
            </div>
            </div>
        </>
    )
}

export default Wishlist