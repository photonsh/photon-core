function generate(snippet, { tag, language, totalLines, plugins }) {
  let result = ''

  result += `<div class="psh psh-${tag}">`

  result += plugins
    .filter((plugin) => plugin.position === 'post-open-div')
    .map(({ process }) => process())
    .join('')

  result += plugins
    .filter((plugin) => plugin.position === 'pre-open-figure')
    .map(({ process }) => process())
    .join('')

  result += '<figure>'

  result += plugins
    .filter((plugin) => plugin.position === 'post-open-figure')
    .map(({ process }) => process())
    .join('')

  result += plugins
    .filter((plugin) => plugin.position === 'pre-open-pre')
    .map(({ process }) => process())
    .join('')

  result += '<pre>'

  result += plugins
    .filter((plugin) => plugin.position === 'post-open-pre')
    .map(({ process }) => process())
    .join('')

  const codeClasses = []

  if (language) {
    codeClasses.push(`language-${language}`)
  }

  plugins
    .filter((plugin) => plugin.position === 'class-code')
    .map(({ process }) => process())
    .forEach((plugin) => {
      codeClasses.push(plugin)
    })

  result += (codeClasses.length) ? `<${tag} class="${codeClasses.filter((el) => el !== undefined).join(' ')}">` : `<${tag}>`

  result += plugins
    .filter((plugin) => plugin.position === 'post-open-code')
    .map(({ process }) => process())
    .join('')

  result += snippet
    .split('\n')
    .map((line, index) => {
      const lineProcessed = plugins
        .filter((plugin) => plugin.position === 'line')
        .map(({ process }) => process)
        .reduce(
          (currentLine, plugin) => plugin({ line: currentLine, lineNumber: index + 1 }),
          line,
        )

      const lineClasses = []

      lineClasses.push('psh-line')

      plugins
        .filter((plugin) => plugin.position === 'class-line')
        .map(({ process }) => process({ line: lineProcessed, lineNumber: index + 1 }))
        .forEach((plugin) => {
          lineClasses.push(plugin)
        })

      const lineClassesProcessed = lineClasses.filter((el) => el !== undefined).join(' ')

      return `<span class="${lineClassesProcessed}">${lineProcessed}${((index + 1) < totalLines) ? '\n' : ''}</span>`
    })
    .join('')

  result += `</${tag}>`

  result += '</pre>'

  result += '</figure>'

  result += '</div>'

  return result
}

export default generate
