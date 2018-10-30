"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

function setup(value) {
  if (value === 'true') {
    return () => 'psh-commands';
  }

  const commandsLines = new Set((0, _utils.linesGenerator)(value.toString()));
  return ({
    lineNumber
  }) => {
    if (commandsLines.has(lineNumber)) {
      return 'psh-commands';
    }

    return undefined;
  };
}

const commandsPlugin = {
  name: 'commands',
  position: 'class-line',
  setup
};
var _default = commandsPlugin;
exports.default = _default;