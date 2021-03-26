import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import showGlobalModal from 'store/actions/modal/showGlobalModal';

import { Container, Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import ProfileMenu from 'components/ProfileMenu';
import JoinAClass from 'components/JoinAClass';

import StyledHeader from './styles';

function Header() {
  const dispatch = useDispatch();

  const handleJoinAClassModal = () => {
    dispatch(showGlobalModal(
      <JoinAClass />,
    ));
  };

  return (
    <StyledHeader className="header">
      <Container className="main-content">
        <Row alignItems="center">
          <Column desktop="3" tablet="3" mobile="6" className="logo-column">
            <Link to="/dashboard">
              <h2 className="app-name txt-primary">Study Room</h2>
            </Link>
          </Column>
          <Column desktop="9" tablet="9" mobile="6">
            <Row alignItems="center" justifyContent="flex-end">
              <Column desktop="2" tablet="2" mobile="12" className="flex j-c-end">
                <Button theme="link" onClick={handleJoinAClassModal}>
                  <FaPlus />
                </Button>

                <ProfileMenu />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
