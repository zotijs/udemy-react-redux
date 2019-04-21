import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

/*enable redux dev tools debug sessions in order to 
save all data in redux store betweeh refreshes of the page:

http://localhost:3000/?debug_session=<some_random_string>

we could use named debug sessions in order to jump between states we want to debug
for example:

http://localhost:3000/?debug_session=logged_in //-> for the state where the user is logged in
http://localhost:3000/?debug_session=logged_out //-> for the state where the user is logged out

*/

//hook redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
  );

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.querySelector('#root')  
);