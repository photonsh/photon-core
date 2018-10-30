import test from 'tape'
import tapDiff from 'tap-diff'

import highlighter from '../dist'

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

test('Tests', async (t) => {
  const highlight = await highlighter()

  t.plan(27)

  t.test('Should return the same code when no language is passed', async (st) => {
    const expected = '<code>console.log(\'psh\')</code>'

    const actual = '<code>console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should highlight code tag using language-text and generate psh-line', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">console.log(&#39;psh&#39;)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should highlight samp tag using language-text and generate psh-line', async (st) => {
    const expected = '<div class="psh psh-samp"><figure><pre><samp class="language-text"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">console.log(&#39;psh&#39;)</span></span></span></samp></pre></figure></div>'

    const actual = '<samp class="language-text">console.log(\'psh\')</samp>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should not highlight when HTML is not escaped', async (st) => {
    const expected = '<code class="language-html"><h1>test</h1></code>'

    const actual = '<code class="language-html"><h1>test</h1></code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should highlight when HTML is escaped', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-html"><span class="psh-line"><span class="text html basic"><span class="meta tag block h1 html"><span class="punctuation definition tag begin html">&lt;</span><span class="entity name tag block h1 html">h1</span><span class="punctuation definition tag end html">&gt;</span></span>test<span class="meta tag block h1 html"><span class="punctuation definition tag begin html">&lt;/</span><span class="entity name tag block h1 html">h1</span><span class="punctuation definition tag end html">&gt;</span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-html">&lt;h1&gt;test&lt;/h1&gt;</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should highlight PHP code missing the open tag', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-php"><span class="psh-line"><span class="source php"><span class="support function construct output php">echo</span> <span class="string quoted single php"><span class="punctuation definition string begin php">&#39;</span>1<span class="punctuation definition string end php">&#39;</span></span><span class="punctuation terminator expression php">;</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-php">echo \'1\';</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should add language-* class', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-javascript"><span class="psh-line"><span class="source js"><span class="entity name type object console js">console</span><span class="meta method-call js"><span class="meta delimiter method period js">.</span><span class="support function console js">log</span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js">(</span><span class="string quoted single js"><span class="punctuation definition string begin js">&#39;</span>psh<span class="punctuation definition string end js">&#39;</span></span><span class="punctuation definition arguments end bracket round js">)</span></span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-javascript">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Caption] Should add data-caption attribute with custom caption as value', async (st) => {
    const expected = '<div class="psh psh-code"><figure><figcaption class="psh-caption"><span class="psh-caption-value">custom caption</span></figcaption><pre><code class="language-javascript"><span class="psh-line"><span class="source js"><span class="entity name type object console js">console</span><span class="meta method-call js"><span class="meta delimiter method period js">.</span><span class="support function console js">log</span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js">(</span><span class="string quoted single js"><span class="punctuation definition string begin js">&#39;</span>psh<span class="punctuation definition string end js">&#39;</span></span><span class="punctuation definition arguments end bracket round js">)</span></span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-javascript" data-caption="custom caption">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Filename] Should add data-filename attribute', async (st) => {
    const expected = '<div class="psh psh-code"><div class="psh-filename"><span class="psh-filename-value">/home/user/script.js</span></div><figure><pre><code class="language-text"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">console.log(&#39;psh&#39;)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-filename="/home/user/script.js">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Request] Should add data-request attribute with common method', async (st) => {
    const expected = '<div class="psh psh-code"><div class="psh-request"><span class="psh-request-method psh-request-method-post">POST</span><span class="psh-request-resource">/resource</span></div><figure><pre><code class="language-json"><span class="psh-line"><span class="source json"><span class="meta structure dictionary json"><span class="punctuation definition dictionary begin json">{</span><span class="punctuation definition dictionary end json">}</span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-json" data-request="post,/resource">{}</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Request] Should add data-request attribute without common method', async (st) => {
    const expected = '<div class="psh psh-code"><div class="psh-request"><span class="psh-request-method">FOO</span><span class="psh-request-resource">/resource</span></div><figure><pre><code class="language-json"><span class="psh-line"><span class="source json"><span class="meta structure dictionary json"><span class="punctuation definition dictionary begin json">{</span><span class="punctuation definition dictionary end json">}</span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-json" data-request="foo,/resource">{}</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Label] Should add data-label attribute with formatted language as value', async (st) => {
    const expected = '<div class="psh psh-code"><figure><div class="psh-label"><span class="psh-label-value">JavaScript</span></div><pre><code class="language-javascript"><span class="psh-line"><span class="source js"><span class="entity name type object console js">console</span><span class="meta method-call js"><span class="meta delimiter method period js">.</span><span class="support function console js">log</span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js">(</span><span class="string quoted single js"><span class="punctuation definition string begin js">&#39;</span>psh<span class="punctuation definition string end js">&#39;</span></span><span class="punctuation definition arguments end bracket round js">)</span></span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-javascript" data-label="true">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Label] Should add data-label attribute with custom label as value', async (st) => {
    const expected = '<div class="psh psh-code"><figure><div class="psh-label"><span class="psh-label-value">custom label</span></div><pre><code class="language-text"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">console.log(&#39;psh&#39;)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-label="custom label">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Label] Should add data-label attribute with custom label as value, ignoring language', async (st) => {
    const expected = '<div class="psh psh-code"><figure><div class="psh-label"><span class="psh-label-value">custom label</span></div><pre><code class="language-javascript"><span class="psh-line"><span class="source js"><span class="entity name type object console js">console</span><span class="meta method-call js"><span class="meta delimiter method period js">.</span><span class="support function console js">log</span><span class="meta arguments js"><span class="punctuation definition arguments begin bracket round js">(</span><span class="string quoted single js"><span class="punctuation definition string begin js">&#39;</span>psh<span class="punctuation definition string end js">&#39;</span></span><span class="punctuation definition arguments end bracket round js">)</span></span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-javascript" data-label="custom label">console.log(\'psh\')</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin LineNumbers] Should add psh-line-numbers class', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text psh-line-numbers psh-line-numbers-s"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-line-numbers="true">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Commands] Should add psh-commands class to all lines', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-commands"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span>\n</span><span class="psh-line psh-commands"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span>\n</span><span class="psh-line psh-commands"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-commands="true">ls -la /\nls -la /\nls -la /</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Commands] Should add psh-commands class to lines 1 and 3', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-commands"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span>\n</span><span class="psh-line psh-commands"><span class="text plain"><span class="meta paragraph text">ls -la /</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-commands="1,3">ls -la /\nls -la /\nls -la /</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Highlight] Should add psh-highlight class to all lines', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-highlight"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line psh-highlight"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-highlight"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-highlight="true">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Highlight] Should add psh-highlight class to lines 1 and 3', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-highlight"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-highlight"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-highlight="1,3">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Add] Should add psh-add class to all lines', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-add"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line psh-add"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-add"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-add="true">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Add]  Should add psh-add class to lines 1 and 3', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-add"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-add"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-add="1,3">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Remove] Should add psh-remove class to all lines', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-remove"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line psh-remove"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-remove"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-remove="true">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Remove] Should add psh-remove class to lines 1 and 3', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line psh-remove"><span class="text plain"><span class="meta paragraph text">const foo = 3</span></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const bar = foo + 3</span></span>\n</span><span class="psh-line psh-remove"><span class="text plain"><span class="meta paragraph text">console.log(bar)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-remove="1,3">const foo = 3\nconst bar = foo + 3\nconsole.log(bar)</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Invisibles] Should add psh-invisibles-* classes', async (st) => {
    const expected = '<div class="psh psh-code"><figure><pre><code class="language-text"><span class="psh-line"><span class="text plain"><span class="meta paragraph text">const foo = (n) =&gt; {</span></span><span class="psh-invisibles-lf"></span>\n</span><span class="psh-line"><span class="text plain"><span class="psh-invisibles-space"> </span><span class="psh-invisibles-space"> </span><span class="meta paragraph text">console.log(n)<span class="psh-invisibles-space"> </span><span class="psh-invisibles-space"> </span></span></span><span class="psh-invisibles-lf"></span>\n</span><span class="psh-line"><span class="text plain"><span class="psh-invisibles-tab">\t</span><span class="meta paragraph text">console.error(n)<span class="psh-invisibles-tab">\t</span><span class="psh-invisibles-tab">\t</span></span></span><span class="psh-invisibles-lf"></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">}</span></span><span class="psh-invisibles-lf"></span>\n</span><span class="psh-line"><span class="psh-invisibles-lf"></span>\n</span><span class="psh-line"><span class="text plain"><span class="meta paragraph text">foo(3)</span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-text" data-invisibles="true">const foo = (n) => {\n  console.log(n)  \n	console.error(n)		\n}\n\nfoo(3)</code>' // eslint-disable-line no-tabs

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Caption + Plugin Request] Respect plugin order', async (st) => {
    const expected = '<div class="psh psh-code"><div class="psh-filename"><span class="psh-filename-value">/home/user/script.js</span></div><div class="psh-request"><span class="psh-request-method psh-request-method-post">POST</span><span class="psh-request-resource">/resource</span></div><figure><pre><code class="language-json"><span class="psh-line"><span class="source json"><span class="meta structure dictionary json"><span class="punctuation definition dictionary begin json">{</span><span class="punctuation definition dictionary end json">}</span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-json" data-filename="/home/user/script.js" data-request="post,/resource">{}</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('[Plugin Request + Plugin Caption] Respect plugin order', async (st) => {
    const expected = '<div class="psh psh-code"><div class="psh-request"><span class="psh-request-method psh-request-method-post">POST</span><span class="psh-request-resource">/resource</span></div><div class="psh-filename"><span class="psh-filename-value">/home/user/script.js</span></div><figure><pre><code class="language-json"><span class="psh-line"><span class="source json"><span class="meta structure dictionary json"><span class="punctuation definition dictionary begin json">{</span><span class="punctuation definition dictionary end json">}</span></span></span></span></code></pre></figure></div>'

    const actual = '<code class="language-json" data-request="post,/resource" data-filename="/home/user/script.js">{}</code>'

    const result = await highlight(actual)

    st.equal(result, expected)
    st.end()
  })

  t.test('Should throw on unknown grammar', async (st) => {
    const actual = '<code class="language-unknown">{}</code>'

    try {
      const result = await highlight(actual)
    } catch (err) {
      st.equal(err.message, 'Grammar not found: unknown')
      st.end()
    }
  })
})