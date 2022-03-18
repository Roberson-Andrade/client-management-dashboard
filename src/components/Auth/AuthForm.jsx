import React, { useState } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FormBox, FormTitle, CreateAccountLink } from './StyledAuthForm';

function AuthForm() {
  const [hasAccount, setHasAccount] = useState(true);

  const createAccountHandler = () => {
    setHasAccount(prevState => !prevState);
  }

  const createAccountText = hasAccount
    ? "Don't have an account? Click here"
    : "Already have an account? Click here";

  return (
    <FormBox component="form">

      <FormTitle variant="h3" >
        Client Management APP
      </FormTitle>

      {!hasAccount && <TextField required id="fullName" label="Full Name" />}

      <TextField required id="email" label="email" />

      <TextField required id="password" label="password" />

      <div>
        {hasAccount && (
          <LoadingButton variant="contained" size="medium">
            Login
          </LoadingButton>
        )}

        {!hasAccount && (
          <LoadingButton variant="contained" size="medium">
            Create an Account
          </LoadingButton>
        )}
      </div>

      <CreateAccountLink href="#" onClick={createAccountHandler}>
        {createAccountText}
      </CreateAccountLink>

    </FormBox>
  );
}

export default AuthForm