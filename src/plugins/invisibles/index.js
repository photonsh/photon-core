function replaceCharacters(text) {
  return text
    .replace(/ /g, '<span class="psh-invisibles-space"> </span>')
    .replace(/\t/g, '<span class="psh-invisibles-tab">\t</span>') // eslint-disable-line no-tabs
}

function convertIndentation(line) {
  let newLine = line

  const startingIndentation = line.match(/^(?:<[^>]*>)+([ \t]+)/)

  if (startingIndentation && startingIndentation[1]) {
    const preIndentation = startingIndentation[0].slice(0, startingIndentation[1].length * -1)

    const indent = replaceCharacters(startingIndentation[1])

    const postIndentation = newLine.slice(startingIndentation[0].length)

    newLine = `${preIndentation}${indent}${postIndentation}`
  }

  const endingIndentation = line.match(/([ \t]+)(?:<[^>]*>)+$/)

  if (endingIndentation && endingIndentation[1]) {
    const preIndentation = newLine.slice(0, endingIndentation[0].length * -1)

    const indent = replaceCharacters(endingIndentation[1])

    const postIndentation = endingIndentation[0].slice(endingIndentation[1].length)

    newLine = `${preIndentation}${indent}${postIndentation}`
  }

  return newLine
}

function setup(value, { totalLines }) {
  return ({ line, lineNumber }) => {
    if (line === '') {
      return '<span class="psh-invisibles-lf"></span>'
    }

    const newLine = convertIndentation(line)

    if (lineNumber < totalLines) {
      return `${newLine}<span class="psh-invisibles-lf"></span>`
    }

    return newLine
  }
}

const invisiblesPlugin = { name: 'invisibles', position: 'line', setup }

export default invisiblesPlugin
