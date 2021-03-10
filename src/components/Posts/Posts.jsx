import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import PostList from "./Posts.list.jsx"
import PostDetail from "./Posts.detail.jsx"

class Posts extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/layout/posts/page/:page" component={PostList} />
                <Route path="/layout/posts/id/:id" component={PostDetail} />
                <Route path="/layout/posts/create" component={PostDetail} />
                <Redirect path="/layout/posts" to="/layout/posts/page/1" />
            </Switch>
        )
    }
}

export default Posts