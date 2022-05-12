import React, { Component } from 'react'
import Body from "./components/body";
import Header from "./components/header";
import Fotter from "./components/footer";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Body />
        <Fotter />
      </div>
    )
  }
}
