import React, { Component } from 'react'
import '../App.css';
import News from './body/News';
import Navbar from './nav/Navbar'



export default class Home extends Component {
  render() {
    return (
      <>
            <Navbar title = 'V_news'/>
            <hr />
            <News/>

      </>
    )
  }
}


