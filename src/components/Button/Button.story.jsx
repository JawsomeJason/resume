import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Button from './Button';
import './Button.css';

storiesOf('Button', Button)
  .add('basic', () => (
    <Button>Basic button</Button>
  ))
  .add('with label', () => (
    <Button label="Btn">Basic button with label</Button>
  ));
