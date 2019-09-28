import React from 'react';
import '../style/LineChart.css'
import {removeReview, reviewsFetchData, selectReview} from "../actions";
import {connect} from "react-redux";
import victory from 'victory';
import {
    VictoryBar,
    VictoryChart,
    VictoryLine,
    VictoryPie,
} from "victory";

let graduationrate20152016 = [
    [6,0.97260274],
    [8,0.924528302],
    [10,0.875],
    [19,0.971830986],
    [20,0.984962406],
    [22,0.965798046],
    [23,0.983481576],
    [27,0.904191617],
    [28,0.937219731],
    [33,0.902923977],
    [34,0.949579832],
    [35,0.940136054],
    [36,0.95003785],
    [37,0.968997837],
    [38,0.946535734],
    [39,0.948787062],
    [40,0.966745843],
    [41,0.892255892],
    [42,0.928853755],
    [43,0.945673263],
    [44,0.954022989],
    [45,0.976777939],
    [46,0.995238095],
    [47,0.884848485],
    [48,0.981481481],
    [49,0.9],
    [50,0.945945946],
    [51,0.966666667],
    [52,0.939130435],
    [53,0.947368421],
    [54,0.976744186],
    [57,0.925336597],
    [58,0.934210526],
    [59,0.955156951],
    [60,0.920679887],
    [61,0.923185342],
    [62,0.923351159],
    [63,0.95738204],
    [64,0.857142857],
    [67,0.985386221],
    [68,0.937704918],
    [69,0.963068182],
    [70,0.935643564],
    [71,0.980456026],
    [72,0.979532164],
    [73,0.944802208],
    [74,0.887096774],
    [75,0.890577508],
    [78,0.969072165],
    [79,0.965779468],
    [81,0.97826087],
    [82,0.921921922],
    [83,0.944038929],
    [84,0.933333333],
    [85,0.969230769],
    [87,0.9],
    [91,0.903394256],
    [92,0.9],
    [93,0.970760234]
];


class LineChart extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="linechart">
                        <VictoryChart
                            width={600}
                            height={400}
                        >
                            <VictoryLine
                                data={graduationrate20152016}
                                x={0}
                                y={1}
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // reviewList: state.manageReviews,
        // hasErrored: state.reviewsErrored,
        // isLoading: state.reviewsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchData: (url) => dispatch(reviewsFetchData(url)),
        // removeReview: (reviewName) => dispatch(removeReview(reviewName)),
        // selectReview: (review) => dispatch(selectReview(review))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);