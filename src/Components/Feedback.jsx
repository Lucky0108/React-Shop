import React, { useState } from 'react'

function Feedback() {
    document.title = "My Feedback";
    const [feed,setFeed] = useState({
        name: "Lakshay",
        feedback: ""
    });

    const inputEvent = (e) => {
        const {name,value} = e.target;
        setFeed((preVal)=>{
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const fSubmit = (e) => {
        e.preventDefault();
        console.log(feed)
        alert(`Hey ${feed.name}, Your Feedback '${feed.feedback}' is much appreciated.`)
    }

    return (
        <>
            <div className="fullFeedback">
            <div className="card" style={{width: "100%",height:"auto"}}>
            <div className="container">
            <div className="card-body">
                <h3 className="card-title text-center">Feedback Portal</h3>
                <small className="form-text text-center text-muted">Your Feedback and Suggestions helps us to improve.</small>
                <form onSubmit={fSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={feed.name} onChange={inputEvent} className="form-control disableInput" id="name" name="name" disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Your Feedback</label>
                    <textarea className="form-control" id="feedbackMessage" onChange={inputEvent} value={feed.feedback} name="feedback" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Feedback
