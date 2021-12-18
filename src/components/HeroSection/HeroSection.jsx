import HeroImage from './HeroImage/HeroImage';
import HeroText from './HeroText/HeroText';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles['hero-section']}>
      <HeroImage />
      <HeroText />
    </div>
  );
};

export default HeroSection;
