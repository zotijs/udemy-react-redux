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

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </Router>
        </div>
    );
};

export default App;