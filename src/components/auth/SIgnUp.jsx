import React from "react";
import eventifyLogo from "../../assets/eventifyLogo.png";

const SIgnUp = () => {
  return (
    <div className='signupPage'>
      <section className='signup-right'>
        <img src={eventifyLogo} alt='' />
      </section>
      <section className='signup-form'>
        <div className='lead-text'>
          <h1>Register your account</h1>
        </div>
        <div className='form-sign'>
          <div className='names'>
            <div className='fname'>
              <label htmlFor='firstName'>Firstname</label>
              <input type='text' required name='firstName' />
            </div>
            <div className='lname'>
              <label htmlFor='lastName'>Lastname</label>
              <input type='text' required name='lastName' />
            </div>
          </div>
          <div className='form-middle'>
            <div className='username'>
              <label htmlFor='username'>username</label>
              <input name='username' required type='text' />
            </div>
            <div className='email'>
              <label htmlFor=''>email</label>
              <input type='email' required />
            </div>
          </div>
          <div className='passwords'>
            <div className='password'>
              <label htmlFor='password'>password</label>
              <input name='password' required type='password' />
            </div>
            <div className='password'>
              <label htmlFor='password-confirm'>confirm password</label>
              <input name='password-confirm' required type='password' />
            </div>
          </div>
          <div className='submit-btn'>
            <button type='submit'>Register</button>
          </div>
          <div className='login-link'>
            <p>
              Already have an account? <a href='#!'>login</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SIgnUp;
