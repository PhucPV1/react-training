import Fetch from "./Fetch"
import Reducer from "./Reducer"
import Redux from "./Redux"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import style from "./styles.module.scss"
import "./App.scss"
import { connect } from "react-redux"

const handleClick = (text) => {
  console.log(text)
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className={style.navBar}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/fetch">Fetch</NavLink>
          <NavLink to="/reducer">Reducer</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/b">Reducer</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route
            path="/b"
            element={
              <Redux name="test" testFunc={handleClick}>
                {{ age: 20 }}
              </Redux>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users }
}

export default connect(mapStateToProps)(App)
