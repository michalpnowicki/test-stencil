// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Button',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => '<my-component first="witam" second="serdecznie" third="elo" />';