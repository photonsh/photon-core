function setup(value) {
  return () => {
    let result = ''

    result += '<div class="psh-filename">'
    result += `<span class="psh-filename-value">${value}</span>`
    result += '</div>'

    return result
  }
}

const filenamePlugin = { name: 'filename', position: 'post-open-div', setup }

export default filenamePlugin
