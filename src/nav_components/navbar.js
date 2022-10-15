import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div>
           <nav class="nav justify-content-center">
             <a class="nav-link active" href="#">Active link</a>
             <a class="nav-link" href="#">Link</a>
             <a class="nav-link disabled" href="#">Disabled link</a>
           </nav>
      </div>
    )
  }
}
