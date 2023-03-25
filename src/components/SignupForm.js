import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Password Do not match');
      return;
    }
    setIsLoggedIn(true);
    toast.success('Account created successfully');
  }

  return (
    <div>
      <h2>Signup Form</h2>
      {/* {Student Instructor tab} */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>First name <sup>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>Last name <sup>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email id"
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p>Create Password<sub>*</sub></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>Confirm Password<sub>*</sub></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confrim Password"
              name="confirmPassword"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Signup;
