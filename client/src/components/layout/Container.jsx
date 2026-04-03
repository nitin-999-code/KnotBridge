import React from 'react';

/**
 * Standardized page container.
 * Enforces consistent max-width, centering, and padding across all pages.
 *
 * @param {React.ReactNode} children
 * @param {string}  className  – additional classes
 * @param {boolean} narrow     – use narrower max-width for reading pages
 * @param {boolean} noPaddingY – disable vertical padding (e.g. inside hero sections)
 */
const Container = ({ children, className = '', narrow = false, noPaddingY = false, style = {} }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: narrow ? '960px' : '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: noPaddingY ? 0 : '24px',
    paddingBottom: noPaddingY ? 0 : '24px',
    ...style,
  };

  return (
    <div className={`medibook-container ${className}`} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
