/*
Modal is a Reusable React Portal Component to be used as modal window across the whole application
https://reactjs.org/docs/portals.html
In general Portals provide a first-class way to render children into a DOM node 
that exists outside the DOM hierarchy of the parent component.
*/
import React from 'react';
import ReactDOM from 'react-dom';

/* Click event inside className="ui standard modal visible active" is just for stopping the event
    from bubbling up to its parent */

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;