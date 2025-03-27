import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';

import './Global.css';

export function App() {

  return (
    <>
      <Header/>
      <Tasks/>
    </>
  )
}
