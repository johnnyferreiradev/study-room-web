import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import ProfileIcon from 'components/ProfileIcon';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';
import Answer from 'components/Answer';

import StyledHomework from './styles';

function Homework() {
  return (
    <StyledHomework>
      <Row>
        <Column desktop="8" tablet="8" mobile="8" className="pr-2">
          <Card>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex mb-1">
                <ProfileIcon
                  icon={(
                    <FaClipboardList />
                  )}
                />
                <div className="homework-info">
                  <h3>Título da atividade</h3>
                  <p className="txt-secondary">
                    <span>Por: </span>
                    Autor
                  </p>
                </div>
              </Column>
            </Row>
            <Row className="info-row">
              <Column desktop="8" tablet="8" mobile="8" className="flex">
                <p className="txt-primary">
                  <span className="txt-secondary">Data de entrega: </span>
                  Dia tal
                </p>
              </Column>
              <Column desktop="4" tablet="4" mobile="4" className="flex j-c-end">
                10 pontos
              </Column>
            </Row>
            <Row className="statement">
              <Column desktop="12" tablet="12" mobile="12" className="flex">
                <p className="txt-secondary">
                  Aqui vai o enunciado da questão, interdum et malesuada fames
                  ac ante ipsum primis in faucibus.
                </p>
              </Column>
            </Row>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex">
                <MaterialList />
              </Column>
            </Row>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex">
                <Comments comments={[]} onSend={() => {}} />
              </Column>
            </Row>
          </Card>
        </Column>
        <Column desktop="4" tablet="4" mobile="4">
          <Answer />
        </Column>
      </Row>
    </StyledHomework>
  );
}

export default Homework;
