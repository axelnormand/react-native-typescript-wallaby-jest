//
// JSDOM and react-native-mock-render allow us to do mount in enzyme as well as shallow
//
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM();
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Ignore React Web errors when using React Native
console.error = message => message;

require('react-native-mock-render/mock');
