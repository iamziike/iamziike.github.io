import classes from './HeroText.module.css';
import DescriptionList from './DescriptionList/DescriptionList';
import resume from '../../../../assets/ziike_resume.pdf';

const HeroText = () => {
  return (
    <div className={classes['hero-text']}>
      <h1 className={classes['hero-text__header']}>Wisdom Alaje</h1>
      <div>
        <div className={classes.details}>
          I am just
          <DescriptionList />
          who loves to code and build stuffs
        </div>
        <div className={classes['find-me']}>
          <a href='https://www.linkedin.com/in/ziikechuks/'>linkedin</a>
          <a href='https://github.com/iamziike/'>github</a>
          <a href={resume}>resume</a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
