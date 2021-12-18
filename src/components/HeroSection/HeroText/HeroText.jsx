import DescriptionList from './DescriptionList/DescriptionList';
import styles from './HeroText.module.css';

const HeroText = () => {
  return (
    <div>
      <h1 className={styles['header']}>Ziike Alaje</h1>
      <div>
        <div className={styles.details}>
          I am just
          <DescriptionList />
          who loves to code and build stuffs
        </div>
        <div className={styles['find-me']}>
          <a href='https://www.linkedin.com/in/ziikechuks/'>
            linkedin
          </a>
          <a href='https://github.com/iamziike/'>github</a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
