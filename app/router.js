import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from './components/main_layout';
import SearchLayout from './components/search_layout';
import Home from './components/home';
import UserList from './components/user_list';
import UserProfile from './components/user_profile';
import WidgetList from './components/widget_list';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/users">
                <Route component={SearchLayout}>
                    <IndexRoute component={UserList} />
                </Route>
                <Route path=":userId" component={UserProfile} />
            </Route>
            <Route path="/widgets">
                <Route component={SearchLayout}>
                    <IndexRoute component={WidgetList} />
                </Route>
            </Route>
        </Route>
    </Router>
);