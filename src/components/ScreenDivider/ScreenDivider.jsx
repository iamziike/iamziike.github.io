import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../routes/Home/Home';
import Contact from '../../routes/Contact/Contact';
import NotFound from '../../routes/NotFound/NotFound';
import styles from './ScreenDivider.module.css';

const ScreenDivider = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles['screen-divider']}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ScreenDivider;
