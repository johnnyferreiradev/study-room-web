import React from 'react';
// import { Link } from 'react-router-dom';

import { StyledButton, StyledLink, StyledAnchor } from './styles';

const Button = ({
  children,
  className,
  fluid,
  disabled,
  theme = 'primary',
  style,
  onClick,
}) => (
  <StyledButton
    type="button"
    className={className}
    fluid={fluid}
    disabled={disabled}
    theme={theme}
    style={style}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

const LinkButton = ({
  children,
  className,
  fluid,
  disabled,
  theme = 'link',
  style,
  to,
  underline,
}) => (
  <StyledLink
    to={to}
    className={className}
    fluid={fluid}
    disabled={disabled}
    theme={theme}
    style={style}
    underline={underline}
  >
    {children}
  </StyledLink>
);

const AnchorButton = ({
  children,
  className,
  fluid,
  disabled,
  theme = 'link',
  style,
  href,
  underline = true,
  onClick,
  target,
}) => (
  <StyledAnchor
    href={href}
    className={className}
    fluid={fluid}
    disabled={disabled}
    theme={theme}
    style={style}
    underline={underline}
    onClick={onClick}
    target={target}
    rel="noopener noreferrer"
  >
    {children}
  </StyledAnchor>
);

export {
  Button,
  LinkButton,
  AnchorButton,
};
