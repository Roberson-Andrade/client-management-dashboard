import React, { useState } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormBox, FormTitle, CreateAccountLink } from './StyledAuthForm';
import { useFormik } from 'formik';

function AuthForm() {
  const [hasAccount, setHasAccount] = useState(true);

  const createAccountHandler = () => {
    setHasAccount(prevState => !prevState);
  };

  const createAccountText = hasAccount
    ? 'Don\'t have an account? Click here'
    : 'Already have an account? Click here';

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
    },
    validate: values => {
      const errors = {};

      if (!values.fullName && !hasAccount) {
        errors.fullName = 'Required';
      }
      else if (values.fullName.length > 50 && !hasAccount) {
        errors.fullName = 'Must be 50 characters or less';
      }

      if (!values.email) {
        errors.email = 'Required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }
      else if (values.password.length < 6) {
        errors.password = 'Must be 6 digits or more';
      }

      return errors;
    },
    onSubmit(value) {
      console.log(value);
    },
  });

  const hasFullNameError = !!formik.errors.fullName && formik.touched.fullName;
  const hasEmailError = !!formik.errors.email && formik.touched.email;
  const hasPasswordError = !!formik.errors.password && formik.touched.password;

  return (
    <FormBox component="form" onSubmit={formik.handleSubmit}>
      <FormTitle variant="h3">Client Management APP</FormTitle>

      {!hasAccount && (
        <TextField
          required
          id="fullName"
          label="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          error={hasFullNameError}
          helperText={hasFullNameError && formik.errors.fullName}
        />
      )}

      <TextField
        required
        id="email"
        label="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={hasEmailError}
        helperText={hasEmailError && formik.errors.email}
      />

      <TextField
        required
        id="password"
        label="password"
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={hasPasswordError}
        helperText={hasPasswordError && formik.errors.password}
      />

      {hasAccount && (
        <LoadingButton type="submit" variant="contained" size="medium">
          Login
        </LoadingButton>
      )}

      {!hasAccount && (
        <LoadingButton type="submit" variant="contained" size="medium">
          Create an Account
        </LoadingButton>
      )}

      <CreateAccountLink href="#" onClick={createAccountHandler}>
        {createAccountText}
      </CreateAccountLink>
    </FormBox>
  );
}

export default AuthForm;