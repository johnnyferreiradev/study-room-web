import styled from 'styled-components';

const StyledDashboard = styled.div.attrs(() => ({ className: 'dashboard-page' }))`
  width: 100%;
  padding-top: 32px;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    .grid-row {
      justify-content: center;
    }
  }
`;

export default StyledDashboard;
