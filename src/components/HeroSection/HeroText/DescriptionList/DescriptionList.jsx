import { useState } from 'react';
import styles from './DescriptionList.module.css';

const DescriptionList = () => {
  const descriptions = ['a beardy dude', 'a web developer', 'an afro superman'];

  const handleAnimationIteration = () => {
    setVisibleIndex((prev) =>
      prev === descriptions.length - 1 ? 0 : prev + 1,
    );
  };

  const [visibleIndex, setVisibleIndex] = useState(0);
  return (
    <div className={styles['description-list']}>
      {descriptions.map((description, index) => {
        return (
          <div
            className={
              visibleIndex === index
                ? styles.description
                : styles['description--no-view']
            }
            key={index}
            onAnimationIteration={handleAnimationIteration}
          >
            {description}
          </div>
        );
      })}
    </div>
  );
};

export default DescriptionList;
