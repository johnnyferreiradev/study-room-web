import React from 'react';
// import { useHistory } from 'react-router-dom';

import { Row, Column } from 'components/Grid';
// import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Comments from 'components/Comments';

import StyledCommunicated from './styles';

function Communicated({
  // title,
  owner,
  // deadline,
}) {
  // const history = useHistory();

  return (
    <StyledCommunicated className="card">
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <ProfileIcon />
          <div className="homework-info">
            <h3>{owner}</h3>
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <p className="content txt-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            justo lectus, ullamcorper in dui eget, dapibus elementum leo.
            Integer posuere finibus est, eget bibendum turpis.
          </p>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center mt-2 footer">
          {/* <p className="txt-primary">
            <span className="txt-secondary">Publicado em: </span>
            {deadline}
          </p>
          <Button theme="link">Ver atividade</Button> */}

          <Comments />
        </Column>
      </Row>
    </StyledCommunicated>
  );
}

export default Communicated;
