
import React from 'react';
import Navbar from './components2/Navbar';
import './App.css';
import Home from './components2/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components2/pages/Services';
import Products from './components2/pages/Products';
import ContactUs from './components2/pages/ContactUs';
import SignUp from './components2/pages/SignUp';
import Marketing from './components2/pages/Marketing';
import Consulting from './components2/pages/Consulting';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/marketing' component={Marketing} />
                <Route path='/consulting' component={Consulting} />
            </Switch>
        </Router>
    );
}

export default App;
