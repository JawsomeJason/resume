import React, { PropTypes } from 'react';

const displayName = 'Section';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

const defaultProps = {
  children: [],
}

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>


      {children && (
        <div className="section-content">
          {children}
        </div>
      )}
    </section>
  );
};

Section.displayName = displayName;
Section.propTypes = propTypes;

export default Section;
