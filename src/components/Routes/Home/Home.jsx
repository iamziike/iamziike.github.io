import classes from './Home.module.css';
import HeroImage from './HeroImage/HeroImage';
import HeroText from './HeroText/HeroText';
import EntranceScreen from '../../UI/EntranceScreen/EntranceScreen';

const Home = () => {
  return (
    <>
      <section className={classes.home}>
        <HeroImage />
        <HeroText />
      </section>
      <EntranceScreen />
    </>
  );
};

export default Home;
