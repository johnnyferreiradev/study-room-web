import styled from 'styled-components';

const StyledStudentClassPage = styled.div.attrs(() => ({
  className: 'student-class-page',
}))`
  width: 100%;

  & > div {
    margin-bottom: 32px;
  }

  .empty-message {
    margin-top: 32px;
  }

  .material-list {
    padding: 16px 0px;
  }
`;

export default StyledStudentClassPage;
