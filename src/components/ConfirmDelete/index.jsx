import React from 'react';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledConfirmDelete from './styles';

function ConfirmDelete({
  title,
  subtitle,
  onDelete,
  deleteLoading,
}) {
  return (
    <StyledConfirmDelete>
      <h3>{title}</h3>
      <p className="txt-secondary">
        {subtitle}
      </p>

      <div className="form">
        <div className="form-group mb-2">
          <Button theme="danger" fluid onClick={onDelete}>
            {!deleteLoading ? 'Excluir' : (
              <Loading type="bubbles" className="button-loading" height={32} width={32} fluid />
            )}
          </Button>
        </div>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
