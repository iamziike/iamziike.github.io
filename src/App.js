import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import LoadingScreen from './components/UI/LoadingScreen/LoadingScreen';
import ScreenDivider from './components/UI/ScreenDivider/ScreenDivider';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScreenDivider />
      <LoadingScreen />
    </Router>
  );
};

export default App;
