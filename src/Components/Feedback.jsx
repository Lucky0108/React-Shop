import React from 'react'

function Feedback() {
    document.title = "My Feedback";
    return (
        <>
            <div className="fullFeedback">
            <div className="card" style={{width: "100%",height:"auto"}}>
            <div className="container">
            <div className="card-body">
                <h3 className="card-title text-center">Feedback Portal</h3>
                <small class="form-text text-center text-muted">Your Feedback and Suggestions helps us to improve.</small>
                <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" value="Lakshay" className="form-control disableInput" id="name" name="name" disabled />
                </div>
                <div className="form-group">
                    <label for="query">Your Feedback</label>
                    <textarea className="form-control" id="feedbackMessage" rows="3"></textarea>
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
