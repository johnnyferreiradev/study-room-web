import styled from 'styled-components';

const StyledLoading = styled.div`
  width: ${({ fluid }) => (fluid ? '100%' : 'max-content')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledLoading;
