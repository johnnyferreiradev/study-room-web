import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  width: ${({ width }) => (width || '100%')};
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export default Card;
