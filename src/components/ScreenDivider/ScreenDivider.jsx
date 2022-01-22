import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../routes/Home/Home';
import Contact from '../../routes/Contact/Contact';
import Projects from '../../routes/Projects/Projects';
import NotFound from '../../routes/NotFound/NotFound';
import styles from './ScreenDivider.module.css';

const ScreenDivider = () => {
  return (
    <div className={styles['screen-divider']}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ScreenDivider;
