import { useState } from 'react';

import classes from './DescriptionList.module.css';

const DescriptionList = () => {
  const descriptions = [
    'a beardy dude 🧔🏾',
    'a web developer 💻',
    'an afro superman 🦸🏾‍♂️',
  ];

  const handleAnimationIteration = () => {
    setVisibleIndex((prev) =>
      prev === descriptions.length - 1 ? 0 : prev + 1,
    );
  };

  const [visibleIndex, setVisibleIndex] = useState(0);
  return (
    <div className={classes['description-list']}>
      {descriptions.map((description, index) => {
        return (
          <div
            className={
              visibleIndex === index
                ? classes.description
                : classes['description--no-view']
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
