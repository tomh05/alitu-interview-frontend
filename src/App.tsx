import './App.css'
import Nav from './components/nav/Nav'
import Router from './Router'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
    </div>
  )
}

export default App
