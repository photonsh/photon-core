import { linesGenerator } from '../../utils'

function setup(value) {
  if (value === 'true') {
    return () => 'psh-add'
  }

  const addLines = new Set(linesGenerator(value.toString()))

  return ({ lineNumber }) => {
    if (addLines.has(lineNumber)) {
      return 'psh-add'
    }

    return undefined
  }
}

const addPlugin = { name: 'add', position: 'class-line', setup }

export default addPlugin
