import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { fullUsersState, actions } from '@store/users/state';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const Login = (): ReactJSXElement | null => {
  const dispatch = useAppDispatch();
  const { userAuthData } = useAppSelector(fullUsersState);
  const [username, setUsername] = useState('Maurine');
  const [password, setPassword] = useState('abc');
  return userAuthData.logged ? null : (
    <div className="absolute backdrop-blur h-screen top-0 left-0 right-0 flex flex-row items-center justify-center">
      <div className="w-2/6">
        <Card variant="outlined">
          <CardContent>
            <FormControl variant="standard">
              LOGIN {userAuthData.validating ? 'Validating' : ' - '}
              <TextField label="Username" variant="standard" value={username} />
              <TextField label="Username" variant="standard" value={password} />
              <Button
                onClick={() =>
                  dispatch(actions.doLogin({ name: username, pass: password }))
                }
              >
                Login
              </Button>
            </FormControl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
