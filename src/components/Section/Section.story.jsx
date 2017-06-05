import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Section from './Section';
import './Section.css';

storiesOf('Section', Section)
  .add('empty', () => (
    <Section title="Hello World" />
  ))
  .add('with text', () => (
    <Section title="With Text">Hello World</Section>
  ))
  .add('with some emoji', () => (
    <Section title="With other content">
      <button>Button with some emojis 😀 😎 👍 💯</button>
    </Section>
  ));
