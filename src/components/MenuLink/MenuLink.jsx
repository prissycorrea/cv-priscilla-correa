import React from 'react';
import ScrollIntoView from 'react-scroll-into-view-if-needed';

const MenuLink = ({ children, to }) => {
  return (
    <ScrollIntoView className="menu-link-style underline-center-animation" selector={`#${to}`}>
      <a href={`#${to}`}>{children}</a>
    </ScrollIntoView>
  );
};

export default MenuLink;
