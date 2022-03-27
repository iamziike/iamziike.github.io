import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './LoadingScreen.module.css';
import useClientStorage from '../../../hooks/useClientStorage';

const LoadingScreen = () => {
  const location = useLocation();
  const [className, setClassName] = useState('');

  const { get, set } = useClientStorage();
  useEffect(() => {
    const action = { type: 'session', key: 'hasAnimatedBefore' };
    const hasAnimatedBefore = get(action.type, action.key);
    if (hasAnimatedBefore) return;
    setClassName(styles.screen);
    set(action.type, action.key, true);
  }, []);

  const handleAnimationEnd = () => {
    setClassName(styles['opening-screen']);
  };

  return (
    <div>
      {location.pathname === '/' && (
        <div onAnimationEnd={handleAnimationEnd} className={className}></div>
      )}
    </div>
  );
};

export default LoadingScreen;
