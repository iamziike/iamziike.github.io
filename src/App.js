import { BrowserRouter as Router } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScreenDivider from './components/ScreenDivider/ScreenDivider';
import './App.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScreenDivider />
      <LoadingScreen />
    </Router>
  );
};

export default App;
