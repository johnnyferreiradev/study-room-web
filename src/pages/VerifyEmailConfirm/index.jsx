import React, { useState, useEffect, useCallback } from 'react';

import { primaryColor } from 'variables';

import { checkEmail } from 'api/auth';

import { Container, Row, Column } from 'components/Grid';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { LinkButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledVerifyEmailConfirm from './styles';

function VerifyEmailConfirm({ location }) {
  const verifyEmailToken = location.search.substring(7);

  const [message, setMessage] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  const verifyEmail = useCallback(() => {
    setLoading(true);

    checkEmail(verifyEmailToken)
      .then(() => {
        setMessage({
          title: 'E-mail confirmado!',
          description: 'Agora você já pode utilizar a plataforma! Faça login para ter acesso.',
        });
      })
      .catch(() => {
        setMessage({
          title: 'Erro ao confirmar e-mail',
          description: 'O link de recuperação que você utilizou já foi consumido ou é inválido. Verifique se utilizou o link correto e tente novamente',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [verifyEmailToken]);

  useEffect(() => {
    verifyEmail();
  }, [verifyEmail]);

  return (
    <StyledVerifyEmailConfirm>
      <Container>
        <Row>
          <Column desktop="6" tablet="6" mobile="12" className="flex j-c-center a-i-center banner-column">
            <Banner />
          </Column>
          <Column desktop="6" tablet="6" mobile="12" className="flex f-column j-c-center a-i-center form-area">
            {!loading ? (
              <>
                <Card width="344px" className="mb-3">
                  <h2 className="text-center">{message.title}</h2>
                  <p className="text-center txt-secondary mb-3">{message.description}</p>
                </Card>

                <div className="flex">
                  <LinkButton to="/">Fazer Login</LinkButton>
                </div>
              </>
            ) : (
              <>
                <h3 className="txt-secondary">Verificando...</h3>
                <Loading type="bubbles" height={96} width={96} fluid color={primaryColor} />
              </>
            )}
          </Column>
        </Row>
      </Container>
    </StyledVerifyEmailConfirm>
  );
}

export default VerifyEmailConfirm;
