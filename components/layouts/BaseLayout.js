import React from "react";
import Header from "../shared/Header";

const BaseLayout = props => {
  const { className, children, isAuthenticated, user } = props;
  return (
    <div className="layout-container">
      <Header isAuthenticated={isAuthenticated} user={user}>
        <div className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </div>
      </Header>
    </div>
  );
};

export default BaseLayout;
