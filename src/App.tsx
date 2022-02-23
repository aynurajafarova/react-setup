import { FC } from 'react'

import reactLogo from './assets/img/tech_react.png'
import logo from './assets/img/react-logo.svg'

import './assets/styles/main.scss'

const App: FC = () => {
  return (
    <>
      <h1>React Typescript Webpack Starter Template {process.env.NODE_ENV}</h1>
      <img src={reactLogo} alt="react-logo" width={200} height={200} />
      <img src={logo} alt="react-logo" width={200} height={200} />
    </>
  )
}

export default App
