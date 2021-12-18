import { useState } from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  const [className, setClassName] = useState(styles.screen);

  const handleAnimationEnd = () => {
    setClassName(styles['opening-screen']);
  };

  return (
    <div>
      <div onAnimationEnd={handleAnimationEnd} className={className}></div>
    </div>
  );
};

export default LoadingScreen;
