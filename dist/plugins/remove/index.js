"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

function setup(value) {
  if (value === 'true') {
    return () => 'psh-remove';
  }

  const removeLines = new Set((0, _utils.linesGenerator)(value.toString()));
  return ({
    lineNumber
  }) => {
    if (removeLines.has(lineNumber)) {
      return 'psh-remove';
    }

    return undefined;
  };
}

const removePlugin = {
  name: 'remove',
  position: 'class-line',
  setup
};
var _default = removePlugin;
exports.default = _default;