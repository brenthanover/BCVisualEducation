import React, { Component } from 'react'
import '../style/AddReview.css'
import {connect} from "react-redux";
import { addReview } from "../actions";

class AddReview extends Component {
    constructor() {
        super();
        this.state = {reviewName: "", reviewMessage: ""};
        this.handleSubmit = this.handleSubmit.bind(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("adding");
        console.log(this.state);
        this.props.addReview(this.state);
    };

    render() {
        return (

            <div className={"reviewForm"}>
                <form
                    className="inputForm"
                    onSubmit={ this.handleSubmit }
                >
                    <h1>Leave a review:</h1>
                    <input
                        type="text"
                        className="reviewInput"
                        id="reviewMessage"
                        placeholder="Your Message"
                        required="required"
                        onChange={(e) => this.setState({reviewMessage: e.target.value, reviewName: this.state.reviewName})}
                    />
                    <input
                        type="text"
                        className="reviewInput"
                        id="reviewName"
                        placeholder="Your Name"
                        required="required"
                        onChange={(e) => this.setState({reviewMessage: this.state.reviewMessage, reviewName: e.target.value})}
                    />
                    <button
                        className="formButton"
                        id="addReview"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { addedReview: state.addedReview };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (review) => dispatch(addReview(review))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);