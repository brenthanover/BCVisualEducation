import { combineReducers } from 'redux';



const reviewsReducer = (reviewList = [], action) => {
    if (action.type === 'REVIEWS_FETCH_SUCCESS') {
        return action.reviews.reviews;
    }
    return reviewList;
};

const reviewsLoading = (state = false, action) => {
    if (action.type === 'REVIEWS_LOADING') {
        return action.isLoading;
    }
    return state;
};

const reviewsErrored = (state = false, action) => {
    if (action.type === 'REVIEWS_ERRORED') {
        return action.hasErrored;
    }
    return state; 
};

const manageReviewsReducer = (reviewList = [], action) => {
    console.log("manage reviews reducer");
    console.log(action);
    switch (action.type) {
        case 'ADD_REVIEW_SUCCESS':
            console.log("add review success");
            console.log(action.review);
            return [...reviewList, {reviewName: action.review.reviewName, reviewMessage: action.review.reviewMessage}];
        case  'REMOVE_REVIEW':
            return reviewList.filter(
                review => { return review.reviewName !== action.payload }
            );
        case  'REVIEWS_FETCH_SUCCESS':
            console.log("success in reducer");
            console.log(action.reviews.reviews);
            return action.reviews.reviews;
        default:
            return reviewList;
    }
};

const selectedReviewReducer = (selectedReview = null, action) => {
    if (action.type === 'REVIEW_SELECTED') {
        return action.payload;
    }
    return selectedReview;
};

export default combineReducers({
    reviews: reviewsReducer,
    reviewsLoading: reviewsLoading,
    reviewsErrored: reviewsErrored,
    manageReviews: manageReviewsReducer,
    selectedReview: selectedReviewReducer
});