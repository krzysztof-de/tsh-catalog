import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Wrapper, Photo, RightSide, StyledForm, FutureFooter } from './Login.styles';
import { AppRoute } from 'routing/AppRoute.enum';
import Button from 'app/components/atoms/Button/Button';
import FormField from 'app/components/atoms/FormField/FormField';
import Logo from 'app/components/atoms/Logo/Logo';

export const Login = () => {
  const history = useHistory();

  const handleFakeLogin = (path) => {
    history.push(path);
  }

  return (
    <Wrapper>
      <Photo />
      <RightSide>
        <Logo />
        <StyledForm>
          <h2>Login</h2>
          <FormField id="username" name="username" label="Username" placeholder="Enter username" />
          <FormField id="password" name="password" type="password" label="Password" placeholder="Enter password" />
          <Button type="submit" label="Log In" isFullWidth onClick={() => handleFakeLogin(AppRoute.home)}/>
          <Link to={AppRoute.home} >Forgot password?</Link>
        </StyledForm>
        <FutureFooter />
      </RightSide>
    </Wrapper>
  );
};
