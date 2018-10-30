"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lineNumbers = _interopRequireDefault(require("./lineNumbers"));

var _label = _interopRequireDefault(require("./label"));

var _caption = _interopRequireDefault(require("./caption"));

var _filename = _interopRequireDefault(require("./filename"));

var _request = _interopRequireDefault(require("./request"));

var _highlight = _interopRequireDefault(require("./highlight"));

var _add = _interopRequireDefault(require("./add"));

var _remove = _interopRequireDefault(require("./remove"));

var _invisibles = _interopRequireDefault(require("./invisibles"));

var _commands = _interopRequireDefault(require("./commands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const plugins = [_lineNumbers.default, _label.default, _caption.default, _filename.default, _request.default, _highlight.default, _add.default, _remove.default, _invisibles.default, _commands.default];
var _default = plugins;
exports.default = _default;