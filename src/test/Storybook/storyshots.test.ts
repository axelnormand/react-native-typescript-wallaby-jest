import initStoryshots, {
  getSnapshotFileName,
} from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// @ts-ignore path import will be fixed when remove `globalFixes.d.ts` as @types/node clashes with @types/react-native require
import path from 'path';

// fix _global import in storyshots code to be jest global including describe method
jest.mock('global', () => global);

/**
 * initialise storyshots
 */
initStoryshots({
  framework: 'react-native',
  configPath: path.join(__dirname, 'storyshots.config.js'),
  test: ({ story, context }: { story: any; context: any }) => {
    // do multi file snapshots with shallow not mount as nicer to compare for humans
    const snapshotFileName = getSnapshotFileName(context);
    const storyElement = story.render(context);
    const shallowTree = shallow(storyElement);

    if (snapshotFileName) {
      // @ts-ignore toMatchSpecificSnapshot added by storyshots
      expect(toJson(shallowTree)).toMatchSpecificSnapshot(snapshotFileName);
    }
  },
});
