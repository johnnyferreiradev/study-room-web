import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

import { Row, Column } from 'components/Grid';
// import { Button } from 'components/Buttons';
import ProfileIcon from 'components/ProfileIcon';
import Material from 'components/Material';

import StyledMaterialCard from './styles';

function MaterialCard({
  title,
  owner,
  description,
  materialList,
}) {
  return (
    <StyledMaterialCard className="card">
      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <ProfileIcon
            icon={(
              <FaPencilRuler />
            )}
          />
          <div className="homework-info">
            <h3>{title}</h3>
            <p className="txt-secondary">
              <span>Por: </span>
              {owner}
            </p>
          </div>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex">
          <p className="content txt-secondary">
            {description}
          </p>
        </Column>
      </Row>

      <Row>
        <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center a-i-center mt-2 footer">
          {materialList.map((material) => (
            <Material
              key={material.id}
              title={material.title}
              type={material.type}
            />
          ))}

          {materialList.length === 0 && (
            <p className="txt-primary text-center">Nenhum material anexado</p>
          )}
        </Column>
      </Row>
    </StyledMaterialCard>
  );
}

export default MaterialCard;
