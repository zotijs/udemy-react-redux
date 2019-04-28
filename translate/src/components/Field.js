import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    //hookup the context !!always on contextType
    //static is equal to Button.contextType = LanguageContext (outside of the class)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;
