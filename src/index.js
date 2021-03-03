import React from 'react'
import ReactDOM from 'react-dom'
import LandingPageParent from './client/components/grow/layout/pages/landing/landing-page-parent'

const App = () => (
  <div>
    <LandingPageParent/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))