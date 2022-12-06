import React, { Component } from 'react'
import '../App.css';
import News from './body/News';
import Navbar from './nav/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



export default class Home extends Component {
  render() {
    return (
      <>

        <Router>
          {/* Navigation Bar Area */}
          <Navbar title='V_news' />
          <hr />
          {/*Body Area */}

          <Routes>


            <Route exact path='/us' element={<News country="us" />}> </Route>


            <Route exact path='/india' element={<News country="in" />}> </Route>


          </Routes>

          {/*Footer Area */}

        </Router>
      </>
    )
  }
}


