"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _languages = _interopRequireDefault(require("./languages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup(value, {
  language
}) {
  if (value === 'true' && !_languages.default.has(language)) {
    return () => undefined;
  }

  return () => {
    let result = '';
    result += '<div class="psh-label">';
    result += `<span class="psh-label-value">${value === 'true' ? _languages.default.get(language) : value}</span>`;
    result += '</div>';
    return result;
  };
}

const labelPlugin = {
  name: 'label',
  position: 'pre-open-pre',
  setup
};
var _default = labelPlugin;
exports.default = _default;