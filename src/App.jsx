import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { AppWrapper } from './App.js'

const App = memo((props) => {
  return (
    <AppWrapper>
      <div className="flexbox">
        <div className="lbox">1</div>
        <div className="rbox">2</div>
      </div>
      R Music
    </AppWrapper>
  )
})

App.propTypes = {}

export default App