import React, { Component } from 'react';
import './Main.css';
import Animation from './Animation';




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


  // <p className="start-text">Vestibulum eleifend elementum est, non porttitor elit sollicitudin sed?</p>
  // <button className="start-button" onClick={this.handleClick}>
  //   {this.state.isToggleOn ? 'CLICK ME' : 'OFF'}
  // </button>
  render() {
    let toggle = this.props.isToggleOn;
    if (this.state.isToggleOn) {
      return (
        <div className="party-not-yet-container">

          <div className="party-not-yet-body">
            <Animation />
          </div>
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
