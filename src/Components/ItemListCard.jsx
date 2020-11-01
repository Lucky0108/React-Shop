import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
       <>
        <div className="card" style={{width: "20rem",margin:"14px"}}>
            <img src={props.src} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{props.detail}</p>
                <div className="d-flex justify-content-between">
                <NavLink to={props.Callref} onClick={()=>{alert(`${props.title} is succesfully added to Wishlist`)}} className="btn btn-outline-primary">Add to Wishlist</NavLink>
                <NavLink to={props.Callref} onClick={()=>{alert(`Congratulations ! ${props.title} is succesfully Purchased!`)}} className="btn btn-outline-success">Buy Now</NavLink>
                </div>
            </div>
        </div>
       </>
    )
}

export default Card
