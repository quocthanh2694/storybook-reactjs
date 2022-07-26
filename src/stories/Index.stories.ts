import { loadJSStories } from 'storybook-loader';
const req = require.context('./');

const options = {
  hierarchyRoot: 'src|stories/',
};
loadJSStories(req, options);
