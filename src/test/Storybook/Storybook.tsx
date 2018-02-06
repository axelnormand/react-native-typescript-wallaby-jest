import { configure, getStorybookUI } from '@storybook/react-native';
import React from 'react';
import { loadStories } from './storyLoader';

//
// Storybook Component and init
//

const getStorybook = () => {
  configure(() => {
    loadStories();
  }, module);

  return getStorybookUI();
};

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991 | https://github.com/storybooks/storybook/issues/2081
class StorybookUIHMRRoot extends React.Component<any> {
  StorybookUIRoot = getStorybook();

  render() {
    const StorybookUIRoot = this.StorybookUIRoot;
    if (!StorybookUIRoot) {
      return null;
    }
    return <StorybookUIRoot />;
  }
}

// AppRegistry not needed for Expo
// AppRegistry.registerComponent('glide-companion', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
