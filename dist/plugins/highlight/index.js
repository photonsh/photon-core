"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

function setup(value) {
  if (value === 'true') {
    return () => 'psh-highlight';
  }

  const highlightLines = new Set((0, _utils.linesGenerator)(value.toString()));
  return ({
    lineNumber
  }) => {
    if (highlightLines.has(lineNumber)) {
      return 'psh-highlight';
    }

    return undefined;
  };
}

const highlightPlugin = {
  name: 'highlight',
  position: 'class-line',
  setup
};
var _default = highlightPlugin;
exports.default = _default;