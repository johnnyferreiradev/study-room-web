import styled from 'styled-components';

const StyledDashboard = styled.div.attrs(() => ({ className: 'dashboard-page' }))`
  width: 100%;
  padding-top: 32px;

  display: flex;
  justify-content: center;

  .empty-class-list {
    width: 100%;
    margin-top: 80px;
  }

  .new-class {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    margin-top: 16px;

    p {
      font-size: 14px;
      margin: 0px;
    }

    svg {
      font-size: 14px;
      color: #ffffff;
      margin: 0px;
      margin-left: 8px;
    }
  }

  @media (max-width: 768px) {
    .grid-row {
      justify-content: center;
    }
  }
`;

export default StyledDashboard;
