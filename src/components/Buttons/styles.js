import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
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
    border: `2px solid ${primaryColor}`,
    hoverColor: secondaryColor,
    boxShadow: `0 2px 4px 0 ${primaryColor}55`,
  },
  secondary: {
    background: whiteColor,
    color: primaryColor,
    border: `2px solid ${primaryColor}`,
    hoverColor: `${tertiaryColor}20`,
    boxShadow: 'none',
  },
  link: {
    background: 'none',
    color: primaryColor,
    border: 'none',
    hoverColor: 'none',
    boxShadow: 'none',
  },
  inverseLink: {
    background: 'none',
    color: whiteColor,
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
    border-color: ${({ theme }) => (theme !== 'link' && theme !== 'secondary' ? buttonThemes[theme].hoverColor : 'none')};
    transition: all .2s;
  }
  :active {
    box-shadow: none;
    transition: all .2s;
  }
  &.disabled {
    background: ${({ theme }) => ((theme !== 'link' && theme !== 'secondary') ? `${buttonThemes[theme].background}55` : 'none')};
    color: ${({ theme }) => ((theme === 'link' || theme === 'secondary') ? `${buttonThemes[theme].color}55` : whiteColor)};
    border-color: ${({ theme }) => (`${buttonThemes[theme].color}55`)};
    box-shadow: none;
    cursor: initial;
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
