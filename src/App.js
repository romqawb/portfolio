import { withStyles } from '@mui/styles';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import Intro from './components/Intro';
import styles from './styles/AppStyles';



function App(props) {
  const [aboutActive, setAboutActive] = useState(false);
  const [projectActive, setProjectActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const { classes } = props;
  return (
    <Router>
      <div className={classes.Container}>
        <Navbar
          aboutActive={aboutActive}
          setAboutActive={setAboutActive}
          projectActive={projectActive}
          setProjectActive={setProjectActive}
          contactActive={contactActive}
          setContactActive={setContactActive}
        />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<AboutPage setActive={setAboutActive} />} />
          <Route path='/projects' element={<ProjectsPage setActive={setProjectActive} />} />
          <Route path='/contact' element={<ContactPage setActive={setContactActive} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
