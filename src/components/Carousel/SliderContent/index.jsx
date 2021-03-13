/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const SliderContent = ({
  children,
  translate,
  transition,
  width,
}) => (
  <div
    css={css`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `}
  >
    {children}
  </div>
);

export default SliderContent;
