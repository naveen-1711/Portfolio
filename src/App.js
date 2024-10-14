import React, { useState } from 'react';
import { Tab, Tabs, Container, Navbar } from 'react-bootstrap';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  const [activeKey, setActiveKey] = useState('home');

  return (
    <div className="App">
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Naveen M</Navbar.Brand>
          <Navbar.Brand href="#" id="navbar-nav">17 November, 2001</Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <Container>
          <Tabs
            id="controlled-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="mb-3"
            transition={true}
          >
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="education" title="Education">
              <Education />
            </Tab>
            <Tab eventKey="skills" title="Skills">
              <Skills />
            </Tab>
            <Tab eventKey="projects" title="Projects">
              <Projects />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Contact />
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
