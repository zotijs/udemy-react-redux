import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    };

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //hookup to the context using context consumer
        //https://reactjs.org/docs/context.html#contextconsumer
        //consumer always provides a function for the context value
        //consumer is preferably used when we want to use multiple context objects
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;