import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({ data, type = 'submit' }) => {
  return (
    <button className={classes.btn} type={type}>
      {data}
    </button>
  );
};

Button.propTypes = {
  data: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
