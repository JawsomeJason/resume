import { configure } from '@kadira/storybook';
import '../src/styles/base.css';

const req = require.context('../src', true, /\.story\.jsx$/);
function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
