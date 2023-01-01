import React from "react";
import ReactDOM from "react-dom/client";

import Notification from "./Component";
import { NotificationProvider } from "./Context";
import ErrorBoundary from "sito-mui-error-component";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NotificationContext />);
