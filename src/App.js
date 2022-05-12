import React, { Component } from 'react'
import Header from "./components/header";
import Fotter from "./components/footer";
import './App.css';
import Sidebar from './components/sidebar';

export default class App extends Component {
  constructor() {
    super();
    this.state = { number: 500 };
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let number = this.state.number - 1;
    this.setState({
      number: number,
    });
    
    // Check if we're at zero.
    if (number === 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Header time={this.state.number}/>
        <div className='main'>
          <div>
            countDown: {this.state.number} 
          </div>
        </div>
        <Fotter />
      </div>
    )
  }
}
