import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSuccessMessage("Form submition successfull!");  
    alert("Form submition successfull!");
  };

  const handleError = (errors) => {
    if (errors.name) alert(errors.name.message);
    if (errors.email) alert(errors.email.message);
    if (errors.password) alert(errors.password.message);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit, handleError)} className="p-3 border">
        
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            id="name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long',
              },
            })}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>} 
    </div>
  );
};

export default Home;
