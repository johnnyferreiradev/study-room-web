import React from 'react';

import StyledConfirmSendResponse from './styles';

function ConfirmSendResponse({
  title,
  subtitle,
  children,
}) {
  return (
    <StyledConfirmSendResponse>
      <h3>{title}</h3>
      <p className="txt-secondary">
        {subtitle}
      </p>

      <div className="content">
        {children}
      </div>
    </StyledConfirmSendResponse>
  );
}

export default ConfirmSendResponse;
