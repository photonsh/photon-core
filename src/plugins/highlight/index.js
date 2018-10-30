import { linesGenerator } from '../../utils'

function setup(value) {
  if (value === 'true') {
    return () => 'psh-highlight'
  }

  const highlightLines = new Set(linesGenerator(value.toString()))

  return ({ lineNumber }) => {
    if (highlightLines.has(lineNumber)) {
      return 'psh-highlight'
    }

    return undefined
  }
}

const highlightPlugin = { name: 'highlight', position: 'class-line', setup }

export default highlightPlugin
