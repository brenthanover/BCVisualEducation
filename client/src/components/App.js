import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Assignment from './Assignment'
import Reviews from './Reviews'
import Home from './Home'

class App extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        console.log("mounting");
        this.callTest()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callTest = async () => {
        const response = await fetch('/test');
        return await response.json();
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <CustomNavbar/>
                    <p className="App-intro">{this.state.data}</p>
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