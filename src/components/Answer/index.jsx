import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Row, Column } from 'components/Grid';
import Card from 'components/Card';
import { Button } from 'components/Buttons';
import MaterialList from 'components/MaterialList';
import Comments from 'components/Comments';

import StyledAnswer from './styles';

function Answer() {
  return (
    <StyledAnswer>
      <Card>
        <Row>
          <Column desktop="6" tablet="6" mobile="6" className="flex">
            <h3>Responder</h3>
          </Column>
          <Column desktop="6" tablet="6" mobile="6" className="flex j-c-end">
            Status
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <MaterialList />
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Button theme="secondary" className="add-button" fluid>
              <FaPlus />
              Adicionar
            </Button>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Button theme="primary" fluid>
              Enviar
            </Button>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex">
            <Comments comments={[]} onSend={() => {}} />
          </Column>
        </Row>
      </Card>
    </StyledAnswer>
  );
}

export default Answer;
