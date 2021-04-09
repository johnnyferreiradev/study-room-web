import styled from 'styled-components';

const StyledTextEditor = styled.div.attrs(() => ({
  className: 'text-editor',
}))`
  width: 100%;

  & > div {
    border-radius: 4px;
    border: 2px solid #F2F6F8;

    .tox-toolbar__primary {
      background: none !important;
      border-bottom: 2px solid #F2F6F8 !important;
    }

    .tox-statusbar {
      border-top: 2px solid #F2F6F8 !important;
    }

    .tox-toolbar__group {
      border-right: 2px solid #F2F6F8 !important;
    }
  }

  .tox-statusbar__branding {
    display: none;
  }
`;

export default StyledTextEditor;
