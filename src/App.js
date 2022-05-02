import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Index from './components/Index'
import Show from './components/Show'
import NewClient from './components/NewClient'
import Edit from './components/Edit'
import NewAccount from './components/NewAccount'
import Transfer from './components/Transfer'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='nav'>
        <br />
        <Link className='nav' to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='nav' to="/new">New Client</Link>
        <br /><br />
        </nav>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/new' element={<NewClient />} />
          <Route path='/:id' element={<Show />} />
          <Route path='/:id/newaccount' element={<NewAccount />} />
          <Route path='/:id/edit' element={<Edit />} />
          <Route path='/:id/transfer' element={<Transfer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App