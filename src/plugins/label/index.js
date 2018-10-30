import languages from './languages'

function setup(value, { language }) {
  if (value === 'true' && !languages.has(language)) {
    return () => undefined
  }

  return () => {
    let result = ''

    result += '<div class="psh-label">'
    result += `<span class="psh-label-value">${(value === 'true') ? languages.get(language) : value}</span>`
    result += '</div>'

    return result
  }
}

const labelPlugin = { name: 'label', position: 'pre-open-pre', setup }

export default labelPlugin
