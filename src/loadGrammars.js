import fs from 'fs'

import { Registry, parseRawGrammar } from 'vscode-textmate'

import grammars from './grammars'

async function createRegistry(details) {
  const registry = new Registry({
    loadGrammar: (scopeName) => {
      const grammarFound = [...grammars].find((grammar) => grammar[1].scopeName === scopeName)

      if (grammarFound) {
        return new Promise((resolve, reject) => {
          fs.readFile(`${__dirname}/../grammars/${grammarFound[1].pkg}/${grammarFound[1].filename}.json`, (error, content) => {
            if (error) {
              reject(error)
            } else {
              const rawGrammar = parseRawGrammar(content.toString(), `${__dirname}/../grammars/${grammarFound[1].pkg}/${grammarFound[1].filename}.json`)

              resolve(rawGrammar)
            }
          })
        })
      }

      return null
    }
  })

  return registry.loadGrammar(details.scopeName)
}

async function loadGrammars() {
  const processedGrammars = [...grammars].map(async ([name, details]) => [name, await createRegistry(details)])

  const loadedGrammars = new Map(await Promise.all(processedGrammars))

  return loadedGrammars
}

export default loadGrammars
