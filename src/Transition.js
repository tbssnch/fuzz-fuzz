import React from 'react';
import ReactDOM from 'react-dom';
import { ReactCSSTransitionGroup } from 'react-transition-group';

const Transition = (Component) => {
  return props => <ReactCSSTransitionGroup
                  transitionAppear={true}
                  transitionAppearTimeout={1700}
                  transitionEnterTimeout={1700}
                  transitionLeaveTimeout={200}
                  transitionName="SlideIn"
  >
    <Component { ...props} />
  </ReactCSSTransitionGroup>
}

export default Transition;
