import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/z.root.css';

import Landing from './pages/Landing';

class App extends React.Component {
    render() {
        return (
            <div>
                <Landing></Landing>
            </div>
        );
    }
}

export default App;
