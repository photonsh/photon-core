import escapeHtml from 'escape-html'

function transform(tokens, { snippet }) {
  const lines = snippet.split('\n')

  const html = tokens.reduce((htmlLines, tokenList, line) => {
    let htmlLine = ''

    if (tokenList.length === 1 && tokenList[0].startIndex === 0 && tokenList[0].endIndex === 1 && lines[line] === '') {
      htmlLine += '\n'
      return htmlLines + htmlLine
    }

    let openScopes = [] // Stack data structure
    htmlLine += tokenList.reduce((htmlTokens, token) => {
      let htmlToken = ''

      htmlToken += token.scopes.reduce((htmlScopes, scope, i) => {
        let htmlScope = ''

        if (scope !== openScopes[i]) {
          if (i + 1 > openScopes.length) {
            htmlScope += `<span class="${scope.replace(/\./g, ' ')}">`
            openScopes.push(scope)
          } else {
            htmlScope += '</span>'.repeat(openScopes.length - i)
            openScopes.splice(i, openScopes.length - i)
            openScopes.push(scope)
            htmlScope += `<span class="${scope.replace(/\./g, ' ')}">`
          }
        }

        // If scope is the last one in this token, and there is more scopes ahead of this level, remove them.
        // Example: need to print contents on level 3 (i = 2), but there is 5 opened, close 2.
        if (i + 1 === token.scopes.length && i + 1 < openScopes.length) {
          htmlScope += '</span>'.repeat(openScopes.length - (i + 1))
          openScopes.splice(i + 1, openScopes.length - (i + 1))
        }

        return htmlScopes + htmlScope
      }, '')

      htmlToken += escapeHtml(lines[line].slice(token.startIndex, token.endIndex))

      return htmlTokens + htmlToken
    }, '')

    htmlLine += '</span>'.repeat(openScopes.length)

    htmlLine += '\n'

    openScopes = []

    return htmlLines + htmlLine
  }, '').trim()

  return html
}

export default transform
