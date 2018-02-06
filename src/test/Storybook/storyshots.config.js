import { configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

//
// The storybook config again just for storyshots init
// Loads the generated stories
//

configure(() => {
  loadStories();
}, module);
