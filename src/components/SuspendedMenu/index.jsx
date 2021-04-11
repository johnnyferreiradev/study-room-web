import React, { useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

import useOutsideEvent from 'hooks/useOutsideEvent';

import { Button, AnchorButton } from 'components/Buttons';
import Card from 'components/Card';

import StyledSuspendedMenu from './styles';

function SuspendedMenu({ children, openButton: OpenButton }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const wrapperRef = useRef(null);
  useOutsideEvent(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <StyledSuspendedMenu isOpen={isOpen} ref={wrapperRef}>
      {OpenButton && (
        <AnchorButton theme="link" fluid onClick={toggleMenu}>
          {OpenButton}
        </AnchorButton>
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
