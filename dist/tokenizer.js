"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function tokenize(grammar, {
  language,
  snippet
}) {
  let ruleStack;

  if (language === 'php' && snippet.slice(0, 2) !== '<?') {
    ruleStack = grammar.tokenizeLine('<?php', ruleStack).ruleStack;
  }

  const tokens = snippet.split('\n').reduce((tokenList, line) => {
    const r = grammar.tokenizeLine(line, ruleStack);
    ruleStack = r.ruleStack;
    return [...tokenList, r.tokens];
  }, []);
  return tokens;
}

var _default = tokenize;
exports.default = _default;