// first-comp.stories.js
import readme from './readme.md';

export default {
  title: 'Button',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `<first-comp first="witam" middle="serdecznie" last="elo" data='{tab1: { label: "witam", content: "serdecznie"}}'/>`;