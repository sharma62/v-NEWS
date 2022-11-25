import React, { Component } from 'react'
import '../App.css';
import News from './body/News';
import Navbar from './nav/Navbar'
import {Zoom} from 'react-reveal/Zoom'



export default class Home extends Component {
  render() {
    return (
      <>

 
        {/* Navigation Bar Area */}
        <Navbar title='V_news' />
        <hr />
        {/*Body Area */}
        
        <News />
        {/*Footer Area */}
 
      </>
    )
  }
}


