/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { primaryColor, quaternaryColor } from 'variables';

const Dot = ({ active }) => (
  <span
    css={css`
      height: 16px;
      width: 16px;
      margin: 0px 8px;
      border-radius: 50%;
      background: ${active ? primaryColor : quaternaryColor};
    `}
  />
);

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: relative;
      margin: 32px 0px;
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide.key} active={activeSlide === i} />
    ))}
  </div>
);

export default Dots;
