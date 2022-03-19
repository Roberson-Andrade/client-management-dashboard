import { Box, Link, styled, Typography } from '@mui/material';

export const FormBox = styled(Box)`
  margin: 8rem auto;
  padding: 1rem 1rem;
  width: 100%;
  max-width: 600px;
  border:1px solid #dcdcdc;
  border-radius: 10px;
  & .MuiTextField-root { margin: 1rem; width:100%; max-width: 400px};
  & .MuiButton-root { margin: 0 4px};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 500px) {
    margin: 4rem auto;
  }
`;

export const FormTitle = styled(Typography)`
  color: #2165C0;
  margin: 20px 0;
  text-align: center;
`;

export const CreateAccountLink = styled(Link)`
  margin-top: 1rem;
`;
