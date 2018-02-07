# Skeleton create react native app with typescript

All the config I found quite a pain to setup so maybe this will help someone.

Any feedback appreciated.

## Install & Run

### Global installs

* install node 8+
* `npm install --global yarn`
* `yarn global add typescript`
* `yarn global add jest`

### Then build & run project

* `yarn install`
* `yarn start` to run
* `yarn test` to jest tests
* `yarn storybook` to run storybook
* `yarn lint` to run tslint

## Notes

* Storybook and storyshots. Uses storyloader to auto generate all requires from `*.story.tsx` to use on `storyshots.test.ts`
* Typescript config transpiles jsx for wallaby
* Expo set to preprocess ts files in `app.json`
* Jest has to use ts-jest to compile ts and then babel to hoist jest.mock()
* Jest coverage to JUnit xml
* Some nice TS Lint rules
* JSDom with Enzyme setup so can use `shallow` and `mount` and looks nice in jest snapshots with enzyme serializer
* Prettier is awesome
* Wallaby also awesome
