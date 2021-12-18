import { useNavigate } from 'react-router-dom';
import StyledButton from '../../widgets/Button/Button';
import styles from './ContactForm.module.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xknynzwr');
  const history = useNavigate();

  if (state.succeeded) {
    setTimeout(() => {
      history('/', { replace: true });
    }, 1000);
    return (
      <div className={styles['submit-notify']}>
        Submitted!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles['contact-form']}
    >
      <input
        id='email'
        type='email'
        placeholder='email'
        required
      />
      <ValidationError
        prefix='Email'
        field='email'
        errors={state.errors}
      />

      <textarea
        id='message'
        name='message'
        placeholder='message'
        rows={10}
        required
      />
      <ValidationError
        prefix='Message'
        field='message'
        errors={state.errors}
      />

      <StyledButton
        data='Send Message'
        disabled={state.submitting}
      />
    </form>
  );
};

export default ContactForm;
