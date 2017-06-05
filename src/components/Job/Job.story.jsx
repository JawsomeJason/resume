import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Job from './Job';
import './Job.css';

storiesOf('Job', Job)
  .add('basic', () => (
    <Job />
  ));
