import styles from './Button.module.css';

const StyledButton = ({ data, type = 'submit' }) => {
  return (
    <button className={styles.btn} type={type}>
      {data}
    </button>
  );
};

export default StyledButton;
