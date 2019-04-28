import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

//wrapping up the UserCreate component with a Context Provider component
//https://reactjs.org/docs/context.html#contextprovider
//in order to change the context object value
//whatever value we are passing to the value prop (!always use value=) of the Provider component (LanguageContext.Provider)
//is being used to change the value of the context object

class App extends React.Component {
    // changeColor() {
    //     return this.state.language === 'english' ? 'primary' : 'red';
    // }

    render(){
        return (
            <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                <ColorContext.Provider value="red">
                        <UserCreate />
                </ColorContext.Provider>
            </LanguageStore>
            </div>
        );
    }
}

export default App;