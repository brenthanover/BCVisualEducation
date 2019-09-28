import React from 'react';
import '../style/LineChart.css'
import {connect} from "react-redux";

import tableau from 'tableau-api';

class TableauGraph2 extends React.Component {
    componentDidMount() {
        this.initViz();
    }

    initViz() {
        const vizUrl = 'https://10ay.online.tableau.com/t/deloittehackathon/views/below90gradrate/Sheet1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }

    render() {
        return (
            <div>
                <div>
                    <div className="linechart">
                        <div ref={(div) => {
                            this.vizContainer = div
                        }}>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableauGraph2);