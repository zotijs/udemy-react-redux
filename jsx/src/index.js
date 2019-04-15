//Import the react, reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

/*const getButtonText = () => {
    return 'Click on Me!';
};*/

//create react component

//double quotes for jsx, single for javascript --not required
const App = () => {
    //const buttonText = 'Click Me!';
    const buttonText = {text: 'Click Me!'}; //needs buttonText.text --bevause of displayed objects
    //const style = {backgroundColor: 'blue', color: 'white'}; //works as is
    return (
    <div>
        <label className="label" htmlFor="name">Enter Name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
    );
};

//show react component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);