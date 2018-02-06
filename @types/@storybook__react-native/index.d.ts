// Type definitions for @storybook/react-native 3.0
// copied from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/storybook__react/index.d.ts

declare module '@storybook/react-native' {
  import React from 'react';

  export type Renderable = React.ComponentType | JSX.Element;
  export type RenderFunction = () => Renderable | Renderable[];

  export type StoryDecorator = (
    story: RenderFunction,
    context: { kind: string; story: string },
  ) => Renderable | null;

  export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction): this;
    addDecorator(decorator: StoryDecorator): this;
  }

  export function addDecorator(decorator: StoryDecorator): void;
  export function configure(fn: () => void, module: NodeModule): void;
  export function setAddon(addon: object): void;
  export function storiesOf(name: string, module: NodeModule): Story;
  export function storiesOf<T>(name: string, module: NodeModule): Story & T;

  export interface StoryObject {
    name: string;
    render: RenderFunction;
  }

  export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
  }

  export function getStorybookUI(config: {
    port: number;
    onDeviceUI: boolean;
    host: string;
  }): any; //TODO: better typing of getStorybookUI

  export function getStorybook(): StoryBucket[];
}
