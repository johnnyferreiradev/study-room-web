/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Slide = ({ content, width }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
    `}
  >
    {content}
  </div>
);

export default Slide;
