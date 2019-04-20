import React from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm function similar to connect function of react-redux

class StreamCreate extends React.Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
          <div className="ui error message">
              <div className="header">{error}</div>
          </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => { 
    const className = `field ${(meta.touched && meta.error) ? 'error' : ''}`;
    return (
       /* <input 
          onChange={formProps.input.onChange} 
          value={formProps.input.value}
        />*/
        /*shorter syntax of the input above + object destructuring*/
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
        </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  /* Field's label prop is a custom prop */
  /* form's onSubmit is being handled from redux-form handleSubmit.
  inside handleSubmit we set are handle callback.
  event.preventDefault() is being handled from handleSubmit*/

  render() {
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter Title"/>
          <Field name="description" component={this.renderInput} label="Enter Description"/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>  
    );
  }  
}

const validate = (formValues) => {
  const errors = {};

  if (formValues && !formValues.title) {
      errors.title = 'Title cannot be empty';
  }

  if (formValues && !formValues.description) {
    errors.description = 'Description cannot be empty';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);