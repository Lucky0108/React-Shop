import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [search,setSearch] = useState("");

    const inputEvent = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <>
        <div className ="Header">
        <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light" style={{justifyContent: "space-between"}}>
            <div className="navLeft">
            <NavLink className="navbar-brand" to="/"> Luckart </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>

            <div className="navMiddle searchBar">
                <input type="text" placeholder="Search" onChange={inputEvent} className="searchInput" />
                <i className="fa fa-search searchIcon" aria-hidden="true" onClick={(()=>{window.location.href=`http://localhost:3000/${search}`})}></i>
            </div>

            <div className="navRight">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown pr-3">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lakshay
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="/profile"><i className="mr-2 fa fa-user-circle-o" aria-hidden="true"></i> My Profile</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="/orders"><i className="mr-2 fa fa-first-order" aria-hidden="true"></i> Orders</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="/wishlist"><i className="mr-2 fa fa-heart" aria-hidden="true"></i> Wishlist</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="#"><i className="mr-2 fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink>
                    </div>
                </li>

                <li className="nav-item dropdown pr-3">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="/support"><i className="mr-2 fa fa-question-circle" aria-hidden="true"></i> Contact Us</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" activeClassName="activeDropdown" exact to="/feedback"><i className="mr-2 fa fa-comments" aria-hidden="true"></i> Drop Feedback</NavLink>
                    </div>
                </li>

                <li className="nav-item cartPart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/cart">Cart<span className="sr-only">(current)</span></NavLink>
                </li>

                </ul>
            </div>
            </div>
            </nav>
        </div>
        </div>
        </>
    )
}

export default Navbar
