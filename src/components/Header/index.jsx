import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { RefsContext } from 'contexters/RefsContext';

import { APP_LOGO } from 'settings';

import { Container, Row, Column } from 'components/Grid';
import { Button } from 'components/Buttons';
import { HamburguerMenu } from 'components/Icons';

import useApp from 'hooks/useApp';

import { primaryColor } from 'variables';

import StyledHeader from './styles';

function Header() {
  const app = useApp();
  // const refs = useContext(RefsContext);

  const [menuState, setMenuState] = useState('closed');

  const scrollToRef = (currentRef) => {
    if (!currentRef) return;

    setMenuState('closed');
    const offsetTop = currentRef.current.getBoundingClientRect().y;
    window.scrollTo(0, offsetTop > 100 ? offsetTop - 32 : 0);
  };

  const toggleMenu = () => {
    if (menuState === 'closed') {
      setMenuState('opened');
    } else {
      setMenuState('closed');
    }
  };

  return (
    <StyledHeader className="header" menuState={menuState}>
      <Container className="main-content">
        <Row alignItems="center">
          <Column desktop="3" tablet="3" mobile="9" className="logo-column">
            <Button onClick={toggleMenu} theme="link" className="toggle-menu-button">
              <HamburguerMenu color={primaryColor} />
            </Button>
            <Link to="/">
              {APP_LOGO ? <img src={APP_LOGO} className="app-logo" alt="Logo" /> : app.appName}
            </Link>
          </Column>
          <Column desktop="9" tablet="9" mobile="3">
            <Row alignItems="center" justifyContent="flex-end">
              <Column desktop="2" tablet="3" mobile="3" className="flex j-c-end">
                <ul className="nav-options desktop-nav no-button">
                  <li>
                    <button type="button" className="no-button" onClick={() => scrollToRef()}>
                      Link 1
                    </button>
                  </li>
                </ul>
              </Column>
              <Column desktop="2" tablet="3" mobile="10" className="flex j-c-center contact">
                <Button theme="primary" onClick={() => scrollToRef()}>Link 2</Button>
              </Column>
            </Row>
          </Column>
        </Row>

        <Row className="mobile-nav">
          <Column desktop="6" tablet="6" mobile="2" className="flex j-c-end nav-options no-button">
            <ul className="">
              <li>
                <button type="button" className="no-button" onClick={() => scrollToRef()}>
                  Link 1
                </button>
              </li>
              <li>
                <Button theme="primary" onClick={() => scrollToRef()}>Link 2</Button>
              </li>
            </ul>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
