import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//wrapping up the UserCreate component with a Context Provider component
//https://reactjs.org/docs/context.html#contextprovider
//in order to change the context object value
//whatever value we are passing to the value prop (!always use value=) of the Provider component (LanguageContext.Provider)
//is being used to change the value of the context object

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    changeColor() {
        return this.state.language === 'english' ? 'primary' : 'red';
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag gb uk" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </div>
                <ColorContext.Provider value={this.changeColor()}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;