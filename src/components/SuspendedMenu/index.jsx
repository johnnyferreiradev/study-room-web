import React, { useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

import useOutsideEvent from 'hooks/useOutsideEvent';

import { Button } from 'components/Buttons';
import Card from 'components/Card';

import StyledSuspendedMenu from './styles';

function SuspendedMenu({ children, openButton: OpenButton }) {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <StyledSuspendedMenu isOpen={isOpen} ref={wrapperRef}>
      {OpenButton && (
        OpenButton
      )}

      {!OpenButton && (
        <Button theme="link" className="add-button" fluid onClick={() => setIsOpen(!isOpen)}>
          <FaEllipsisV />
        </Button>
      )}

      <Card className="suspended-content">
        {children}
      </Card>
    </StyledSuspendedMenu>
  );
}

export default SuspendedMenu;
