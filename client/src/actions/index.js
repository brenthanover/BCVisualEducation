import axios from 'axios';

export const reviewsErrored = (bool) => {
    return {
        type: 'REVIEWS_ERRORED',
        hasErrored: bool
    };
};

export const isReviewsLoading = (bool) => {
    return {
        type: 'REVIEWS_LOADING',
        isLoading: bool
    };
};

export const reviewsSuccess = (reviews) => {
    console.log("success!!!!!!!");
    console.log(reviews);
    return {
        type: 'REVIEWS_FETCH_SUCCESS',
        reviews: reviews
    };
};

export const reviewsFetchData = (url) => {
    return (dispatch) => {
        dispatch(isReviewsLoading(true));
        console.log("fetching...");

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    console.log("not okay!");
                    console.log(response.ok);
                    throw Error(response.statusText);
                }
                dispatch(isReviewsLoading(false));
                console.log("in action");
                console.log(response.data);
                dispatch(reviewsSuccess([]));
                console.log("just dispatched the action!")
                return response;
            })
            .catch(() => {
                console.log("There is an error occurring");
                dispatch(reviewsErrored(true))
            });

        // fetch(url)
        //     .then((response) => {
        //         console.log("alskfjslkdfj");
        //         console.log(response.ok);
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }
        //         dispatch(isReviewsLoading(false));
        //         return response;
        //     })
        //     .then((response) => response.json())
        //     .then((reviews) => {
        //         console.log("in action");
        //         console.log(reviews);
        //         dispatch(reviewsSuccess(reviews));
        //     })
        //     .catch(() => {
        //         console.log("it's all fucked up");
        //         dispatch(reviewsErrored(true))
        //     });
    };
};

// export const addReview = (url, reviewwwww) => {
//     return (dispatch) => {
//         dispatch(isReviewsLoading(true));
//
//         const review = {reviewName: "brent", reviewMessage: "dope dude"};
//
//         fetch(url, {
//             method: 'PUT',
//             body: review
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(isReviewsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((review) => dispatch(addReviewSuccess(review)))
//             .catch(() => dispatch(reviewsErrored(true)));
//         console.log("done adding");
//         dispatch(addReviewSuccess(review))
//     };
// };



export const addReview = ({ review }) => {
    return dispatch => {
        // dispatch(addReviewStarted());
        //
        // axios
        //     .post('http://localhost:5000/reviews', {
        //         review: review
        //     })
        //     .then(res => {
        //         dispatch(addReviewSuccess(res.data));
        //     })
        //     .catch(err => {
        //         dispatch(addReviewFailure(err.message));
        //     });
    };
};

export const addReviewSuccess = (review) => {
    return {
        type: 'ADD_REVIEW_SUCCESS',
        review: review
    };
};

export const addReviewStarted = () => ({
    type: 'ADD_REVIEW_STARTED'
});

export const addReviewFailure = error => ({
    type: 'ADD_REVIEW_FAILURE',
    payload: {
        error
    }
});

export const removeReview = (reviewName) => {
    return {
        type: 'REMOVE_REVIEW',
        payload: reviewName
    };
};

export const selectReview = (review) => {
    return {
        type: 'REVIEW_SELECTED',
        payload: review
    };
};


// tutorials from multiple sources
// https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react