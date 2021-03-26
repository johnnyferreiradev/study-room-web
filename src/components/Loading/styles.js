import styled from 'styled-components';

const StyledLoading = styled.div`
  width: ${({ fluid }) => (fluid ? '100%' : 'max-content')};
  display: flex;
  justify-content: center;
  align-items: center;

  &.button-loading {
    position: absolute;
    top: 5px;
  }
`;

export default StyledLoading;
