function setup(value, { totalLines }) {
  if (value !== 'true' && value !== 'uniform') {
    return () => undefined
  }

  return () => {
    let result = 'psh-line-numbers'

    if (value === 'true') {
      if (totalLines < 10) {
        result += ' psh-line-numbers-s'
      } else if (totalLines < 100) {
        result += ' psh-line-numbers-m'
      } else if (totalLines < 1000) {
        result += ' psh-line-numbers-l'
      } else {
        result += ' psh-line-numbers-xl'
      }
    } else {
      result += ' psh-line-numbers-l'
    }

    return result
  }
}

const lineNumbersPlugin = { name: 'line-numbers', position: 'class-code', setup }

export default lineNumbersPlugin
