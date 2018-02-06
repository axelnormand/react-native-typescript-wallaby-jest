// TODO: nicer typing for addon-storyshots
declare module '@storybook/addon-storyshots' {
  function initStoryshots(config: any): any;

  export function getSnapshotFileName(context: any): string;
  export default initStoryshots;
}
