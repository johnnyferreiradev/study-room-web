import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from 'api/auth';

import { validadeEmail } from 'utils/validate';

import { getToken, authenticate } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledLogin from './styles';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleLoginField = ({ target }) => {
    switch (target.name) {
      case 'email':
        setLoginState((prevState) => ({ ...prevState, email: target.value }));
        break;
      case 'password':
        setLoginState((prevState) => ({ ...prevState, password: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleLogin = () => {
    const { email, password } = loginState;

    if (!email || !password) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    if (!validadeEmail(email)) {
      dispatch(showSnackbar('Email inválido', 'danger'));
      return;
    }

    setLoading(true);

    login(email, password)
      .then(({ data }) => {
        authenticate(data);
        history.push('/dashboard');
      })
      .catch(() => {
        dispatch(showSnackbar('Email ou senha incorretos', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const userIsAuth = getToken();

    if (userIsAuth) {
      history.push('/dashboard');
    }
  }, [history]);

  return (
    <StyledLogin>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Entrar</h2>
              <p className="text-center txt-secondary mb-3">Faça login para acessar a plataforma</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="login-email">
                    <p>E-mail</p>
                    <input
                      type="email"
                      name="email"
                      value={loginState.email}
                      placeholder="Digite seu e-mail"
                      id="login-email"
                      onChange={handleLoginField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="login-password">
                    <p>Senha</p>
                    <input
                      type="password"
                      name="password"
                      value={loginState.password}
                      id="login-password"
                      onChange={handleLoginField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <Button theme="primary" fluid onClick={handleLogin}>
                    {!loading ? 'Login' : (
                      <Loading type="bubbles" height={32} width={32} fluid />
                    )}
                  </Button>
                </div>

                <div className="form-group mb-2">
                  <LinkButton to="recovery-password">Esqueci minha senha</LinkButton>
                </div>
              </div>
            </Card>

            <div className="flex">
              <p className="txt-secondary mr-1">Não possui uma conta?</p>
              <LinkButton to="/register">Cadastre-se</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledLogin>
  );
}

export default Login;
