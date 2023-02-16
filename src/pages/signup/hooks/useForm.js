import { useState, useEffect } from 'react';
import { AuthState } from '../../../context/AuthProvider';

const useForm = (validate) => {
  const { createUser, login, logout, user } = AuthState();



  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values.name, values.email, values.password);
    setValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {

      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
