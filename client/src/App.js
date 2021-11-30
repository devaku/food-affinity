import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/z.root.css';

// Pages
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<Landing></Landing>}></Route>
                    <Route path="/menu" element={<Menu></Menu>}></Route>
                    <Route path="/login" element={<SignUp></SignUp>}></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;
