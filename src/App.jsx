
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AllRouters from './components/AllRouters'

function App() {

  return (
    <>
      <BrowserRouter>
        <AllRouters />
      </BrowserRouter>
    </>
  )
}

export default App
