import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Welcome } from './Pages/Welcome'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' Component={Welcome} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
