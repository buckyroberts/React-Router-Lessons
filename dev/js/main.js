import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from "./components/Layout";
import Blog from "./components/Blog";
import Forum from "./components/Forum";
import Homepage from "./components/Homepage";
import Videos from "./components/Videos";

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Homepage}/>
            <Route path="/blog/:category/:title" component={Blog}/>
            <Route path="/forum" component={Forum}/>
            <Route path="/videos" component={Videos}/>
        </Route>
    </Router>
), document.getElementById('app'));
