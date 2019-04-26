import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

//when working with React Router each Component needs to work in isolation (fetch its own data)
//fetch the data when it's not inside the state --> navigate to /stream/3 for example even if the streams are not loaded
//fetchStream inside componentDidMount lifecycle method

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    //initialValues inside StreamForm is a special prop of redux-form
    //for example initialValues={{title: 'edit me', description: 'change me to'}}
    //using lodash's (_) pick in order to pass only the values that i am going to edit onSubmit
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          initialValues={_.pick(this.props.stream, 'title', 'description')} 
          onSubmit={this.onSubmit} 
        />
      </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);