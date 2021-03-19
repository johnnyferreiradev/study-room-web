import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { register } from 'api/auth';

import { validadeEmail } from 'utils/validate';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledRegister from './styles';

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [registerState, setRegisterState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleRegisterField = ({ target }) => {
    switch (target.name) {
      case 'name':
        setRegisterState((prevState) => ({ ...prevState, name: target.value }));
        break;
      case 'email':
        setRegisterState((prevState) => ({ ...prevState, email: target.value }));
        break;
      case 'password':
        setRegisterState((prevState) => ({ ...prevState, password: target.value }));
        break;
      case 'confirmPassword':
        setRegisterState((prevState) => ({ ...prevState, confirmPassword: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleRegister = () => {
    const {
      name,
      email,
      password,
      confirmPassword,
    } = registerState;

    if (!email || !password || !password || !confirmPassword) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    if (password !== confirmPassword) {
      dispatch(showSnackbar('As senhas não coincidem', 'danger'));
      return;
    }

    if (!validadeEmail(email)) {
      dispatch(showSnackbar('Email inválido', 'danger'));
      return;
    }

    setLoading(true);

    register(name, email, password)
      .then(() => {
        dispatch(showSnackbar('Cadastro efetuado com sucesso. Faça login para acessar.', 'success'));
        history.push('/');
      })
      .catch(({ response }) => {
        const [error] = response.data;

        if (error.field === 'email' && error.validation === 'unique') {
          dispatch(showSnackbar('Este E-mail já está sendo utilizado', 'danger'));
        } else if (error.field === 'password' && error.validation === 'min') {
          dispatch(showSnackbar('A senha deve possuir pelo menos 6 digitos', 'danger'));
        } else {
          dispatch(showSnackbar(error.message, 'danger'));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <StyledRegister>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Cadastre-se</h2>
              <p className="text-center txt-secondary mb-3">Faça seu cadastro para acessar a plataforma</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="register-user-name">
                    <p>Nome</p>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      id="register-user-name"
                      name="name"
                      value={registerState.name}
                      onChange={handleRegisterField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-email">
                    <p>E-mail</p>
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      id="register-email"
                      name="email"
                      value={registerState.email}
                      onChange={handleRegisterField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-password">
                    <p>Senha</p>
                    <input
                      type="password"
                      placeholder=""
                      id="register-password"
                      name="password"
                      value={registerState.password}
                      onChange={handleRegisterField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="register-confirm-password">
                    <p>Repita a senha</p>
                    <input
                      type="password"
                      placeholder=""
                      id="register-confirm-password"
                      name="confirmPassword"
                      value={registerState.confirmPassword}
                      onChange={handleRegisterField}
                    />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid onClick={handleRegister}>
                    {!loading ? 'Cadastrar-se' : (
                      <Loading type="bubbles" height={32} width={32} fluid />
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <p className="txt-secondary mr-1">Já possui uma conta?</p>
              <LinkButton to="/">Fazer login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRegister>
  );
}

export default Register;
