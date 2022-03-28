import { useState, useEffect } from 'react';

import styles from './EntranceScreen.module.css';
import useClientStorage from '../../../hooks/useClientStorage';

const EntranceScreen = () => {
  const [className, setClassName] = useState();
  const { get, set } = useClientStorage();

  useEffect(() => {
    const action = { type: 'session', key: 'hasAnimatedBefore' };
    const hasAnimatedBefore = get(action.type, action.key);

    if (!hasAnimatedBefore) {
      setClassName(styles.screen);
      set(action.type, action.key, true);
    }
  }, []);

  const handleAnimationEnd = () => {
    setClassName(styles['opening-screen']);
  };

  return (
    <>
      {className && (
        <div onAnimationEnd={handleAnimationEnd} className={className}></div>
      )}
    </>
  );
};

export default EntranceScreen;
