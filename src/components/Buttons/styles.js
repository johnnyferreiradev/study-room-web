import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
  // quaternaryColor,
  // darkColor,
  whiteColor,
  dangerColor,
  warningColor,
  successColor,
  infoColor,
} from 'variables';

const buttonThemes = {
  primary: {
    background: primaryColor,
    color: whiteColor,
    border: 'none',
    hoverColor: secondaryColor,
    boxShadow: `0 2px 4px 0 ${primaryColor}55`,
  },
  secondary: {
    background: whiteColor,
    color: primaryColor,
    border: 'none',
    hoverColor: `${tertiaryColor}20`,
    boxShadow: `0 2px 4px 0 ${primaryColor}55`,
  },
  link: {
    background: 'none',
    color: secondaryColor,
    border: 'none',
    hoverColor: 'none',
    boxShadow: 'none',
  },
  danger: {
    background: dangerColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${dangerColor}cc`,
    boxShadow: `0 2px 4px 0 ${dangerColor}55`,
  },
  warning: {
    background: warningColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${warningColor}cc`,
    boxShadow: `0 2px 4px 0 ${warningColor}55`,
  },
  success: {
    background: successColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${successColor}cc`,
    boxShadow: `0 2px 4px 0 ${successColor}55`,
  },
  info: {
    background: infoColor,
    color: whiteColor,
    border: 'none',
    hoverColor: `${infoColor}cc`,
    boxShadow: `0 2px 4px 0 ${infoColor}55`,
  },
};

const StyledButton = styled.button`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 14px 48px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all .5s;
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
  :active {
    box-shadow: none;
    transition: all .2s;
  }
`;

const StyledLink = styled(Link)`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

const StyledAnchor = styled.a`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  outline: none;
  box-shadow: ${({ theme }) => buttonThemes[theme].boxShadow};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  :hover {
    color: ${({ theme }) => (theme === 'link' ? buttonThemes[theme].hoverColor : buttonThemes[theme].color)};
    background: ${({ theme }) => (theme !== 'link' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
`;

export {
  StyledButton,
  StyledLink,
  StyledAnchor,
};
