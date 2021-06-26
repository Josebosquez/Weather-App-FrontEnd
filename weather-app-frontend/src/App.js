import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Recent from "./components/Recents/Recent"

import "./App.css"

export class App extends Component {
  render() {
    return (
      <div className='page'>
        <div>
          <Header />
        </div>

        <div className='middle'>
          <div className='left'> 
            <form>
              <input
                placeholder='City name'
              />

              <input
                placeholder='State Name'
              />
            </form>
          </div>

          <div className='right'>
            <Recent />
          </div>

        </div>

      </div>
    )
  }
}

export default App
