"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setup(value) {
  return () => {
    let result = '';
    result += '<div class="psh-filename">';
    result += `<span class="psh-filename-value">${value}</span>`;
    result += '</div>';
    return result;
  };
}

const filenamePlugin = {
  name: 'filename',
  position: 'post-open-div',
  setup
};
var _default = filenamePlugin;
exports.default = _default;