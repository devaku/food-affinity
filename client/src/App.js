import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/z.root.css';
import './css/z.loading.css';

// Pages
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import Paymaya from './pages/Paymaya';
import Status from './pages/Status';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<Landing></Landing>}></Route>
                    <Route path="/menu" element={<Menu></Menu>}></Route>
                    <Route path="/login" element={<SignUp></SignUp>}></Route>
                    <Route
                        path="/payments"
                        element={<Paymaya></Paymaya>}
                    ></Route>
                    <Route
                        path="/payments/:order_id/:status"
                        element={<Status></Status>}
                    ></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;
