import classes from './Home.module.css';
import HeroImage from './HeroImage/HeroImage';
import HeroText from './HeroText/HeroText';

const Home = () => {
  return (
    <section className={classes.home}>
      <HeroImage />
      <HeroText />
    </section>
  );
};

export default Home;
