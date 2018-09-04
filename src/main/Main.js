import React, { Component } from 'react';
import './Main.css';
import Animation from './../animation/Animation';
import Transition from './../Transition';
import { CSSTransitionGroup } from 'react-transition-group';





class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    let toggle = this.props.isToggleOn;
    if (this.state.isToggleOn) {
      return (
        <div className="party-not-yet-container">

          <div className="party-not-yet-body">
            <div>
            <Animation />

              <div className="start-text">
                <p>hey there, fuzzco.</p>
                <p>im tyler.</p>
                <p>i would love to work with you.</p>
              </div>


              </div>
            </div>
            <button className="start-button" onClick={this.handleClick}>
              {this.state.isToggleOn}
              <svg className="button-arrow" viewBox="0 0 404.23 371.75"><path class="d" d="M401.61,192.43,224.46,369.15a9,9,0,0,1-12.66,0L176,333.27a9,9,0,0,1,0-12.66l100.7-100.45H8a8,8,0,0,1-8-8V159.59a8,8,0,0,1,8-8H276.67L176.37,51a9,9,0,0,1,0-12.66L212.25,2.6a9,9,0,0,1,12.66,0L401.63,179.77A9,9,0,0,1,401.61,192.43Z"/></svg>
            </button>
        </div>
      )
    }
    else return (
      <div className="party-time-container">
        <div className="party-time-text">
          <p>oh, hey.</p>

          <p>fancy seeing you here.</p>

          <p>i know things are hard right now.</p>

          <p>Vestibulum eleifend elementum est, non porttitor elit sollicitudin sed. Sed auctor id risus tincidunt blandit. Vestibulum ornare feugiat est, vel iaculis lorem congue non. Nam hendrerit nibh et orci rutrum faucibus eu tempus elit. Aenean hendrerit volutpat ex sit amet dictum. Etiam pulvinar leo ac metus bibendum, non efficitur ex molestie. Nullam sit amet purus augue. Quisque vel nisi vitae dolor scelerisque volutpat. Duis viverra mauris et leo efficitur aliquet. Duis ipsum odio, lobortis nec efficitur ac, sagittis sed sem. Nullam sed ligula non massa euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lectus felis, cursus vel accumsan eu, egestas ac elit. Praesent eu ante maximus tellus mollis imperdiet. Nullam convallis leo nibh, ut lacinia mi lacinia eget.</p>
        </div>
      </div>
    );
  }
}

export default Main;
