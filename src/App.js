import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScreenDivider from './components/ScreenDivider/ScreenDivider';
import './styles/fonts.css';
import './styles/reset.css';
import './styles/variables.css';
import './styles/base.css';

const App = () => {
  return (
    <>
      <ScreenDivider />
      <LoadingScreen />
    </>
  );
};

export default App;
