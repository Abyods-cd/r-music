import React, { memo } from 'react'
import { AppWrapper } from './style.js'
import Home from '@/views/home/index.jsx'

const App = memo(() => {
  return (
    <AppWrapper>
      <Home></Home>
    </AppWrapper>
  )
})


export default App