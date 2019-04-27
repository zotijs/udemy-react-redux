import React from 'react';
//npm react-router-dom
import {Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

//Never use <a /> anchor tags for routing --> dumps all data (dumps html and reloads it)
//instead use Link of react-router-dom

//----

//Components inside BrowserRouter (or Routers in general) with no path declared are being shown in every route

//in StreamEdit Route the /:id part inside the path navigates the user to the StreamEdit page if anything is typed after the edit/ part of the url
//we can find the value of the "id" that we are passing through the url inside the match object of the props that the router is passing to the component

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </Router>
        </div>
    );
};

export default App;