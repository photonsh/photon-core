"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

function setup(value) {
  if (value === 'true') {
    return () => 'psh-add';
  }

  const addLines = new Set((0, _utils.linesGenerator)(value.toString()));
  return ({
    lineNumber
  }) => {
    if (addLines.has(lineNumber)) {
      return 'psh-add';
    }

    return undefined;
  };
}

const addPlugin = {
  name: 'add',
  position: 'class-line',
  setup
};
var _default = addPlugin;
exports.default = _default;