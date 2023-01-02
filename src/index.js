import React from "react";

// sito components
import ErrorBoundary from "sito-mui-error-component";

import Notification from "./Component";
import { NotificationProvider, useNotification } from "./Context";

export { Notification, useNotification };

const NotificationContext = (props) => {
  const { children } = props;

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <Notification />
        {children}
      </NotificationProvider>
    </ErrorBoundary>
  );
};

export default NotificationContext;
