import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { validadeEmail } from 'utils/validate';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { Button, LinkButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledRecoveryPassword from './styles';

function RecoveryPassword() {
  const dispatch = useDispatch();

  const [recoveryPasswordState, setRecoveryPasswordState] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleRecoveryPasswordField = ({ target }) => {
    switch (target.name) {
      case 'email':
        setRecoveryPasswordState((prevState) => ({ ...prevState, email: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleRecoveryPassword = () => {
    const { email } = recoveryPasswordState;

    if (!validadeEmail(email)) {
      dispatch(showSnackbar('Email inválido', 'danger'));
      return;
    }

    // send
    console.log('enviar');
  };

  return (
    <StyledRecoveryPassword>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            <Card width="344px" className="mb-3">
              <h2 className="text-center">Recuperar senha</h2>
              <p className="text-center txt-secondary mb-3">Insira seu e-mail e enviaremos um link de recuperação de senha</p>

              <div className="form">
                <div className="form-group mb-2">
                  <label htmlFor="recovery-password-email">
                    <p>E-mail</p>
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      id="recovery-password-email"
                      name="email"
                      value={recoveryPasswordState.email}
                      onChange={handleRecoveryPasswordField}
                    />
                  </label>
                </div>

                <div className="form-group mb-3">
                  <Button theme="primary" fluid onClick={handleRecoveryPassword}>
                    {!loading ? 'Enviar' : (
                      <Loading type="bubbles" height={32} width={32} fluid />
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex">
              <LinkButton to="/">Voltar para o Login</LinkButton>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledRecoveryPassword>
  );
}

export default RecoveryPassword;
