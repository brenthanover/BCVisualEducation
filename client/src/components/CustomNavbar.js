import React from 'react';
import '../style/CustomNavbar.css'
import { NavLink } from 'react-router-dom'
import ReactSymbol from './ReactSymbol'

class CustomNavbar extends React.Component {


    render() {
        return (
            <div id="navbar">
                <div className="grid">
                    <div className="gridblock">
                        <div id="brent">data visualization for your bc schools</div>
                    </div>
                    <div className="symbolblock">
                        <ReactSymbol/>
                    </div>
                </div>
                <ul>
                    <li><NavLink to="/Home">Facilities</NavLink></li>
                    <li><NavLink to="/about">total graduation rates</NavLink></li>
                    <li><NavLink to="/reviewpage">Eligible graduation rates</NavLink></li>
                    <li><NavLink to="/assignment">data by district</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default CustomNavbar;