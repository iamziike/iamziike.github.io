import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import classes from './ScreenDivider.module.css';
import Navbar from '../Navbar/Navbar';
import Home from '../../Routes/Home/Home';
import Contact from '../../Routes/Contact/Contact';
import Projects from '../../Routes/Projects/Projects';
import NotFound from '../../Routes/NotFound/NotFound';

const ScreenDivider = () => {
  return (
    <div className={classes['screen-divider']}>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ScreenDivider;
