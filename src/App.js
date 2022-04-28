import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Index from './components/Index'
import Show from './components/Show'
import NewClient from './components/NewClient'
import Edit from './components/Edit'
import NewAccount from './components/NewAccount'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to="/">Home</Link><br />
        <Link to="/new">New Client</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/new' element={<NewClient />} />
          <Route path='/:id' element={<Show />} />
          <Route path='/:id/newaccount' element={<NewAccount />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App