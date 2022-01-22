import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  const location = useLocation();
  const [className, setClassName] = useState(styles.screen);

  const handleAnimationEnd = () => {
    setClassName(styles['opening-screen']);
  };

  if (location.pathname === '/')
    return (
      <div>
        <div onAnimationEnd={handleAnimationEnd} className={className}></div>
      </div>
    );
  return <></>;
};

export default LoadingScreen;
