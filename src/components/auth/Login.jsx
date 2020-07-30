import React from "react";

const Login = () => {
  return (
    <div className='signinPage'>
      <section className='signin-left'>
        <div className='left-text'>
          <h1>Welcome Back,</h1>
          <h3>log in to explore events</h3>
        </div>
      </section>
      <section className='signin-form'>
        <div className='lead-text'>
          <h1>Sign into your account</h1>
        </div>
        <div className='login-with-googleBtn'>
          <div className='icon'>
            <i class='fab fa-google fa-2x'></i>
          </div>
          <div className='login-text'>login with google</div>
          <div></div>
        </div>
        <div className='or'>
          <h1>OR</h1>
        </div>
        <div className='email'>
          <label htmlFor='email'>Firstname</label>
          <input type='text' required name='email' />
        </div>
        <div className='password'>
          <label htmlFor='password'>Firstname</label>
          <input type='password' required name='password' />
        </div>
        <div className='forget'>
          <a href='#!'>forgot password? </a>
        </div>
        <div className='signin-btn'>
          <button type='submit'>Sign in</button>
        </div>
        <div className='text'>
          <p>
            New to eventify? <a href='#!'>Sign Up </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
