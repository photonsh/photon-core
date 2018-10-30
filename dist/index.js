"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parse = _interopRequireDefault(require("parse5"));

var _loadGrammars = _interopRequireDefault(require("./loadGrammars"));

var _parser = _interopRequireDefault(require("./parser"));

var _tokenizer = _interopRequireDefault(require("./tokenizer"));

var _transformer = _interopRequireDefault(require("./transformer"));

var _generator = _interopRequireDefault(require("./generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function initialize() {
  const grammars = await (0, _loadGrammars.default)();
  return async function highlight(html) {
    if (!html) {
      return '';
    }

    const document = _parse.default.parseFragment(html.trim());

    if (document !== undefined && document.childNodes !== undefined && document.childNodes.length === 1 && (document.childNodes[0].nodeName === 'code' || document.childNodes[0].nodeName === 'samp') && document.childNodes[0].attrs !== undefined && document.childNodes[0].attrs.length && document.childNodes[0].attrs.find(attr => attr.name === 'class' && /\blang(?:uage)?-([\w-]+)\b/i.test(attr.value)) && document.childNodes[0].childNodes !== undefined && document.childNodes[0].childNodes.length === 1 && document.childNodes[0].childNodes[0].value !== undefined && document.childNodes[0].childNodes[0].value !== '') {
      const {
        tag,
        language,
        snippet,
        totalLines,
        plugins
      } = (0, _parser.default)(document.childNodes[0]);

      if (!grammars.has(language)) {
        throw new Error(`Grammar not found: ${language}`);
      }

      const tokens = (0, _tokenizer.default)(grammars.get(language), {
        language,
        snippet
      });
      const transformedSnippet = (0, _transformer.default)(tokens, {
        snippet
      });
      const generatedSnippet = (0, _generator.default)(transformedSnippet, {
        tag,
        language,
        totalLines,
        plugins
      });
      return generatedSnippet;
    }

    return html;
  };
}

var _default = initialize;
exports.default = _default;