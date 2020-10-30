import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Project from './components/Pages/Project';
import Blog from './components/Pages/Blog';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ParticleComponent from './components/ParticleComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ParticleComponent/>
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
