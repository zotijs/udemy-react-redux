# Modern React with Redux Udemy course

Course material from Stephen Grider's [react-redux](https://www.udemy.com/react-redux/) udemy course. 

## Apps Summary

- **jsx:** An introduction to [jsx](https://reactjs.org/docs/introducing-jsx.html) syntax.
- **components:** An introduction to functional [components](https://reactjs.org/docs/react-component.html) and props.
- **seasons:** An introduction to class based [components](https://reactjs.org/docs/react-component.html), [state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).
	> **Points of interest:**
	>- Geolocation.getCurrentPosition() [method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) to get  the current position of the device.
	>- using [semantic-ui](https://semantic-ui.com/) for styling.
- **pics:** An introduction to React [event handling](https://reactjs.org/docs/handling-events.html) and [Refs](https://reactjs.org/docs/refs-and-the-dom.html).
	> **Points of interest:**
	>- using [axios](https://www.npmjs.com/package/axios) to consume APIs.
	>- using [unsplash](https://unsplash.com/developers) API for the application images.
	>- using [css grid layout](https://www.w3schools.com/css/css_grid.asp) for the images placement.
- **videos:** Similart to **pics** application using [youtube](https://developers.google.com/youtube/) API.
- **songs:** An introduction to [redux](https://redux.js.org/)  and [react-redux](https://react-redux.js.org/).
- **blog:** Advanced react and redux implementation using [redux-thunk](https://www.npmjs.com/package/redux-thunk) middleware. 
	> **Points of interest:**
	> - Asynchronous Action Creators using redux-thunk.
	> - Solve overfetching using [lodash](https://lodash.com/): [memoize](https://lodash.com/docs/4.17.11#memoize) | [uniq](https://lodash.com/docs/4.17.11#uniq) | uniq & [chain](https://lodash.com/docs/4.17.11#chain).
	> - Mock data from [jsonplaceholder](https://jsonplaceholder.typicode.com/) API.
- **streams:** CRUD operations in React and Redux.
	> **Points of interest:**
	> - Navigation using [react-router-dom](https://www.npmjs.com/package/react-router-dom).
	> - Custom history object for React Router, in order to make history accessible to the entire application. Mostly implemented for programmatic navigation inside Action Creators.
	> - Modal window implementation using React [Portals](https://reactjs.org/docs/portals.html).
	> - React [Fragment](https://reactjs.org/docs/fragments.html) element.
	> - Managing forms using [redux-form](https://redux-form.com/).
	> - Authentication using Google API [OAuth2](https://developers.google.com/api-client-library/javascript/reference/referencedocs#auth-setup).
	> - Fake Restful API using [json-server](https://www.npmjs.com/package/json-server).
	> - RTMP Media Server using [node-media-server](https://github.com/illuspas/Node-Media-Server).
- **translate:** Bubbling down props using React [Context](https://reactjs.org/docs/context.html).
	> **Points of interest:**
	> - Creating a Redux-like store using **Context.Provider**.
- **hooks-simple:** An introduction to React [Hooks](https://reactjs.org/docs/hooks-intro.html).
	> **Points of interest:**
	> - Handling state in functional components using the [useState](https://reactjs.org/docs/hooks-state.html) hook.
	> - Lifecycle for functional components using the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook.
	> - Reusable Network Requests component using hooks and axios.
- **hooks-seasons:** Refactor **seasons** application for hooks.
