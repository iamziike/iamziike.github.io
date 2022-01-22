import DescriptionList from './DescriptionList/DescriptionList';
import styles from './HeroText.module.css';
import resume from '../../../assets/ziike_resume.pdf';

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
          <a href='https://www.linkedin.com/in/ziikechuks/'>linkedin</a>
          <a href='https://github.com/iamziike/'>github</a>
          <a href={resume}>resume</a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
