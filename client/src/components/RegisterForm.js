import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState({
  email: '',
  password : '',
  registrationMessage : '',
  errors : ''
});

  const validateForm = () => {
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/register', {
          username,
          email,
          password,
        });

        console.log(response.data);

        // Assuming the server responds with a 'message' property on successful registration
        if (response.data.message) {
          setRegistrationMessage(response.data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error.response.data);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.username && <p className="error">{errors.username}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <button onClick={handleRegister}>Register</button>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default RegisterForm;
