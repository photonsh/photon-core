import parse5 from 'parse5'

import loadGrammars from './loadGrammars'

import parse from './parser'
import tokenize from './tokenizer'
import transform from './transformer'
import generate from './generator'

async function initialize() {
  const grammars = await loadGrammars()

  return async function highlight(html) {
    if (!html) {
      return ''
    }

    const document = parse5.parseFragment(html.trim())

    if (
      document !== undefined
      && document.childNodes !== undefined
      && document.childNodes.length === 1
      && (document.childNodes[0].nodeName === 'code' || document.childNodes[0].nodeName === 'samp')
      && document.childNodes[0].attrs !== undefined
      && document.childNodes[0].attrs.length
      && document.childNodes[0].attrs.find((attr) => (attr.name === 'class' && (/\blang(?:uage)?-([\w-]+)\b/i).test(attr.value)))
      && document.childNodes[0].childNodes !== undefined
      && document.childNodes[0].childNodes.length === 1
      && document.childNodes[0].childNodes[0].value !== undefined
      && document.childNodes[0].childNodes[0].value !== ''
    ) {
      const { tag, language, snippet, totalLines, plugins } = parse(document.childNodes[0])

      if (!grammars.has(language)) {
        throw new Error(`Grammar not found: ${language}`)
      }

      const tokens = tokenize(grammars.get(language), { language, snippet })

      const transformedSnippet = transform(tokens, { snippet })

      const generatedSnippet = generate(transformedSnippet, {
        tag,
        language,
        totalLines,
        plugins,
      })

      return generatedSnippet
    }

    return html
  }
}

export default initialize
