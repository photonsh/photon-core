"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linesGenerator = linesGenerator;

function* lineRange(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

function* linesGenerator(lineStr) {
  const tokens = lineStr.split(',');

  for (const token of tokens) {
    // eslint-disable-line no-restricted-syntax
    const range = token.split('-');

    if (range.length > 2) {
      throw new Error(`Invalid range of lines in ${lineStr}.`);
    } else if (range.length === 2) {
      yield* lineRange(parseInt(range[0], 10), parseInt(range[1], 10));
    } else {
      yield parseInt(token, 10);
    }
  }
} // eslint-disable-line import/prefer-default-export