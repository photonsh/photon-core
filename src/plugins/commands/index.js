import { linesGenerator } from '../../utils'

function setup(value) {
  if (value === 'true') {
    return () => 'psh-commands'
  }

  const commandsLines = new Set(linesGenerator(value.toString()))

  return ({ lineNumber }) => {
    if (commandsLines.has(lineNumber)) {
      return 'psh-commands'
    }

    return undefined
  }
}

const commandsPlugin = { name: 'commands', position: 'class-line', setup }

export default commandsPlugin
