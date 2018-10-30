function tokenize(grammar, { language, snippet }) {
  let ruleStack

  if (language === 'php' && snippet.slice(0, 2) !== '<?') {
    ruleStack = grammar.tokenizeLine('<?php', ruleStack).ruleStack
  }

  const tokens = snippet.split('\n').reduce((tokenList, line) => {
    const r = grammar.tokenizeLine(line, ruleStack)
    ruleStack = r.ruleStack

    return [...tokenList, r.tokens]
  }, [])

  return tokens
}

export default tokenize
