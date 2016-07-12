import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import Layout from "./components/Layout";
import Forum from "./components/Forum";
import Videos from "./components/Videos";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/forum" component={Forum}/>
            <Route path="/videos" component={Videos}/>
        </Route>
    </Router>
), document.getElementById('app'));
