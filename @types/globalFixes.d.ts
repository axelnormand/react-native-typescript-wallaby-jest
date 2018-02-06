// fix @types/react-native redeclaring require which @types/node also declares
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/15960
// TODO: remove globalFixes.d.ts and include node in tsconfig types, plus add @types/node back into project once @types/react-native fixed and doesn't redeclare require

export {}; // this file needs to be a module
declare global {
  export interface NodeModule {}
  const module: NodeModule;
  const global: any;
  const __dirname: string;
}
