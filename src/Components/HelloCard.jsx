import React from 'react'

function HelloCard() {
    return (
        <div>
            <div className="card HelloCard" style={{width:"18rem",height:"max-content",paddingBottom:"2rem"}}>
                    <div className="card-body d-flex pb-0">
                        <div>
                        <i className="fa fa-user-circle fa-2x mr-4 mt-2 profUser" aria-hidden="true"></i>
                        </div>
                        <div>
                        <h6 className="card-text">Hello,</h6>
                        <p className="card-text font-weight-bold">Lakshay Yadav</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HelloCard
