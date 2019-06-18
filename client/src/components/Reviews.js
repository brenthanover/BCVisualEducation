import React from 'react';
import '../style/Reviews.css'
import { connect } from 'react-redux';
import AddReview from "./AddReview"
import ReviewDetail from './ReviewDetail'
import { removeReview, selectReview, reviewsFetchData } from '../actions'


class Reviews extends React.Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:5000/reviews');
        console.log("mounting");
        console.log(this.props);
    }

    renderReviews() {
        return this.props.reviewList.map((review) => {
            return (
                <div className={"review"}>
                    <div className="quoter">
                        { review.reviewName }
                    </div>
                    <button
                        className="ui button primary"
                        onClick={() => this.props.removeReview(review.reviewName)}
                    >
                        Remove review
                    </button>
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectReview(review)}
                    >
                        Review Details
                    </button>
                </div>
            );
        });
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! Error rendering</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        console.log("rendering");
        console.log(this.props.reviewList);
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <div className="review-list">
                            { this.renderReviews() }
                        </div>
                    </div>

                    <div className="ui column eight wide">
                        <AddReview />
                        <ReviewDetail />
                    </div>
                </div>

            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        reviewList: state.manageReviews,
        hasErrored: state.reviewsErrored,
        isLoading: state.reviewsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(reviewsFetchData(url)),
        removeReview: (reviewName) => dispatch(removeReview(reviewName)),
        selectReview: (review) => dispatch(selectReview(review))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);