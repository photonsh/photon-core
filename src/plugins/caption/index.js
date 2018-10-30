function setup(value) {
  return () => {
    let result = ''

    result += '<figcaption class="psh-caption">'
    result += `<span class="psh-caption-value">${value}</span>`
    result += '</figcaption>'

    return result
  }
}

const captionPlugin = { name: 'caption', position: 'post-open-figure', setup }

export default captionPlugin
