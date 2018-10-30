import { linesGenerator } from '../../utils'

function setup(value) {
  if (value === 'true') {
    return () => 'psh-remove'
  }

  const removeLines = new Set(linesGenerator(value.toString()))

  return ({ lineNumber }) => {
    if (removeLines.has(lineNumber)) {
      return 'psh-remove'
    }

    return undefined
  }
}

const removePlugin = { name: 'remove', position: 'class-line', setup }

export default removePlugin
