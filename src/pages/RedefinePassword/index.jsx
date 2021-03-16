import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';

import StyledRedefinePassword from './styles';

function RedefinePassword() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [redefineState, setRedefineState] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleRedefineField = ({ target }) => {
    switch (target.name) {
      case 'password':
        setRedefineState((prevState) => ({ ...prevState, password: target.value }));
        break;
      case 'confirmPassword':
        setRedefineState((prevState) => ({ ...prevState, confirmPassword: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleRedefine = () => {
    const { password, confirmPassword } = redefineState;

    if (!password || !confirmPassword) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    if (password !== confirmPassword) {
      dispatch(showSnackbar('As senhas não coincidem', 'danger'));
      return;
    }

    dispatch(showSnackbar('Senhas redefinidas com sucesso!', 'success'));
    history.push('/');
  };

  return (
    <StyledRedefinePassword>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Criar nova senha</h2>
              <p className="text-center txt-secondary mb-3">Insira a sua nova senha de acesso</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="redefine-password">
                    <p>Senha</p>
                    <input
                      type="password"
                      name="password"
                      value={redefineState.password}
                      placeholder=""
                      id="redefine-password"
                      onChange={handleRedefineField}
                    />
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="redefine-confirm-password">
                    <p>Repita a senha</p>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={redefineState.confirmPassword}
                      placeholder=""
                      id="redefine-confirm-password"
                      onChange={handleRedefineField}
                    />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid onClick={handleRedefine}>Salvar</Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <LinkButton to="/">Voltar para o Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRedefinePassword>
  );
}

export default RedefinePassword;
