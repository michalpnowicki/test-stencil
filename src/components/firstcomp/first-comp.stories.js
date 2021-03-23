// first-comp.stories.js
import readme from './readme.md';

export default {
  title: 'Button',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `<first-comp first="Witam" middle="Was" last="Serdecznie" data='test'/>`;