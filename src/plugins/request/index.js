function setup(value) {
  const [method, resource] = value.split(',')

  if (!method || !resource) {
    return () => undefined
  }

  return () => {
    const commonMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

    let methodClass = ''

    if (commonMethods.includes(method.toUpperCase())) {
      methodClass = ` psh-request-method-${method.toLowerCase()}`
    }

    let result = ''

    result += '<div class="psh-request">'
    result += `<span class="psh-request-method${methodClass}">${method.toUpperCase()}</span>`
    result += `<span class="psh-request-resource">${resource.toLowerCase()}</span>`
    result += '</div>'

    return result
  }
}

const requestPlugin = { name: 'request', position: 'post-open-div', setup }

export default requestPlugin
