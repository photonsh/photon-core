"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _vscodeTextmate = require("vscode-textmate");

var _grammars = _interopRequireDefault(require("./grammars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createRegistry(details) {
  const registry = new _vscodeTextmate.Registry({
    loadGrammar: scopeName => {
      const grammarFound = [..._grammars.default].find(grammar => grammar[1].scopeName === scopeName);

      if (grammarFound) {
        return new Promise((resolve, reject) => {
          _fs.default.readFile(`${__dirname}/../grammars/${grammarFound[1].pkg}/${grammarFound[1].filename}.json`, (error, content) => {
            if (error) {
              reject(error);
            } else {
              const rawGrammar = (0, _vscodeTextmate.parseRawGrammar)(content.toString(), `${__dirname}/../grammars/${grammarFound[1].pkg}/${grammarFound[1].filename}.json`);
              resolve(rawGrammar);
            }
          });
        });
      }

      return null;
    }
  });
  return registry.loadGrammar(details.scopeName);
}

async function loadGrammars() {
  const processedGrammars = [..._grammars.default].map(async ([name, details]) => [name, await createRegistry(details)]);
  const loadedGrammars = new Map((await Promise.all(processedGrammars)));
  return loadedGrammars;
}

var _default = loadGrammars;
exports.default = _default;