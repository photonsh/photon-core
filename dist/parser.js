"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plugins = _interopRequireDefault(require("./plugins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(node) {
  const tag = node.nodeName;
  const language = node.attrs.filter(attr => attr.name === 'class' && /\blang(?:uage)?-([\w-]+)\b/i.test(attr.value)).map(attr => attr.value.match(/\blang(?:uage)?-([\w-]+)\b/i)[1].toLowerCase()).join('');
  const snippet = node.childNodes[0].value.trim();
  const totalLines = snippet.split('\n').length;
  const pluginFunctions = node.attrs.reduce((pluginsArray, attr) => {
    if (attr.name.slice(0, 5) === 'data-' && attr.value !== undefined && attr.value !== '' && attr.value !== 'false') {
      const plugin = _plugins.default.find(({
        name: pluginName
      }) => pluginName === attr.name.slice(5));

      if (plugin) {
        return [...pluginsArray, {
          name: plugin.name,
          position: plugin.position,
          process: plugin.setup(attr.value, {
            tag,
            language,
            snippet,
            totalLines
          })
        }];
      }
    }

    return pluginsArray;
  }, []);
  return {
    tag,
    language,
    snippet,
    totalLines,
    plugins: pluginFunctions
  };
}

var _default = parse;
exports.default = _default;