import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import <%= pascalEntityName %> from './<%= pascalEntityName %>';
import './<%= pascalEntityName %>.css';

storiesOf('<%= pascalEntityName %>', <%= pascalEntityName %>)
  .add('basic', () => (
    <<%= pascalEntityName %> />
  ));
