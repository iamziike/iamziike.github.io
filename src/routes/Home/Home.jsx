import HeroSection from '../../components/HeroSection/HeroSection';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <HeroSection />
    </section>
  );
};

export default Home;
