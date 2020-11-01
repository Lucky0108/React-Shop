import React from 'react'
import Sdata from './SData'
import Card from './ItemListCard'

function ItemList() {
    document.title = "Luckart";
    return (
       <>
        <div className="container-fluid">
          <div className="row mx-auto">  
            {
                Sdata.map((val,index) => {
                    return (
                        <Card 
                            key = {index}
                            title = {val.title}
                            src = {val.src}
                            detail = {val.detail}
                            Callref={val.refCall}
                        />
                    )
                })
            }
            </div>
        </div>
       </>
    )
}

export default ItemList
