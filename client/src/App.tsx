import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import PDFGeneration from './pages/PDFGeneration';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/users">User Management</Link></li>
                        <li><Link to="/pdf">PDF Generation</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/users" component={UserManagement}/>
                    <Route path="/pdf" component={PDFGeneration}/>
                </Switch>
            </div>
        </Router>
    );
}

