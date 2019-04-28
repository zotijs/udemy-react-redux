//the Context object
//we can use it wherever we want it across the components
//https://reactjs.org/docs/context.html
import React from 'react';

//'english' is the default context value
const Context = React.createContext('english');

// redux like store using Context
export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;