import React from 'react';

import StyledNotificationTag from './styles';

function NotificationTag({ value }) {
  return (
    <StyledNotificationTag>
      {value}
    </StyledNotificationTag>
  );
}

export default NotificationTag;
