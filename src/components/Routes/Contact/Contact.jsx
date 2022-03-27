import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

import classes from './Contact.module.css';
import Button from '../../UI/Button/Button';

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_USEFORM_KEY);
  const history = useNavigate();

  if (state.succeeded) {
    setTimeout(() => {
      history('/', { replace: true });
    }, 1000);
    return <div className={classes['submit-notify']}>Submitted!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes['contact-form']}>
      <input id='email' type='email' placeholder='email' required />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <textarea
        id='message'
        name='message'
        placeholder='message'
        rows={10}
        required
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />

      <Button data='Send Message' disabled={state.submitting} />
    </form>
  );
};

export default Contact;
