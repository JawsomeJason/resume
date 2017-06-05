import React, { PropTypes } from 'react';

const displayName = '<%= pascalEntityName %>';

const propTypes = {
  // rfcpt for each prop
};

const <%= pascalEntityName %> = (/* props|{ prop1, prop2 } */) => {
  return (
    // jsx
  );
};

<%= pascalEntityName %>.displayName = displayName;
<%= pascalEntityName %>.propTypes = propTypes;

export default <%= pascalEntityName %>;
