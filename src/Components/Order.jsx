import React from 'react'
import OrderCard from './OrderCard';
import Odata from './Odata'

function Order() {
    document.title = "My Orders";
    return (
        <>
            <div className="fullOrder py-5">
                {
                    Odata.map((val,index)=>{
                          return (
                              <OrderCard 
                                key={index}
                                imgsrc = {val.imgSrc}
                                name={val.name}
                                color={val.color}
                                seller = {val.seller}
                                price = {val.price}
                                deliverDate = {val.deliverDate}
                                status = {val.status}
                                statusIcon = {val.statusIcon}
                              />
                          )  
                    })
                }
            </div>
        </>
    )
}

export default Order
