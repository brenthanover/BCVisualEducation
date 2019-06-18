import React from 'react';
import { connect } from 'react-redux'

const ReviewDetail = ({ review }) => {
    if (!review) {
        return <div>Select a review</div>
    }

    return (
        <div>
            <h3>Details for review by { review.reviewName }</h3>
            <p>
                Review: { review.reviewMessage }
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { review: state.selectedReview }
};

export default connect(mapStateToProps)(ReviewDetail);