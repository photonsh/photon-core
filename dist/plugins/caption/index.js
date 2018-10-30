"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setup(value) {
  return () => {
    let result = '';
    result += '<figcaption class="psh-caption">';
    result += `<span class="psh-caption-value">${value}</span>`;
    result += '</figcaption>';
    return result;
  };
}

const captionPlugin = {
  name: 'caption',
  position: 'post-open-figure',
  setup
};
var _default = captionPlugin;
exports.default = _default;