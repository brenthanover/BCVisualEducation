import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Assignment from './Assignment'
import Reviews from './Reviews'
import Home from './Home'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <CustomNavbar/>
                    <Route path='/Home' component ={ Home }/>
                    <Route path='/about' component ={ About }/>
                    <Route path='/assignment' component ={ Assignment }/>
                    <Route path='/reviewpage' component ={ Reviews }/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;