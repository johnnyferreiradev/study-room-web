import React from 'react';
import { BsXCircle } from 'react-icons/bs';

import StyledEmptyMessage from './styles';

function EmptyMessage({
  title,
  description,
  className,
  children,
}) {
  return (
    <StyledEmptyMessage className={className}>
      <BsXCircle />
      <h3 className="txt-primary">{title}</h3>
      <p className="txt-secondary">{description}</p>
      {children}
    </StyledEmptyMessage>
  );
}

export default EmptyMessage;
