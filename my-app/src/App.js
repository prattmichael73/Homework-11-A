
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Jumbotron />
            <Projects />
          </Route>
          <Route exac path="/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route exac path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exac path="/contact">
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
