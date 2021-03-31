import styled from 'styled-components';

const StyledStudentClassPage = styled.div.attrs(() => ({
  classNames: 'student-class-page',
}))`
  width: 100%;

  .empty-message {
    margin-top: 32px;
  }
`;

export default StyledStudentClassPage;
