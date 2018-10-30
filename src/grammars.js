const languages = [
  ['1c', {
    pkg: '1c-bsl',
    filename: '1c',
    scopeName: 'source.bsl',
  }],
  ['abap', {
    pkg: 'abap',
    filename: 'abap',
    scopeName: 'source.abp',
  }],
  ['actionscript2', {
    pkg: 'actionscript',
    filename: 'actionscript',
    scopeName: 'source.actionscript.2',
  }],
  ['actionscript3', {
    pkg: 'actionscript3',
    filename: 'actionscript 3',
    scopeName: 'source.actionscript.3',
  }],
  ['asdoc', {
    pkg: 'actionscript3',
    filename: 'asdoc',
    scopeName: 'text.html.asdoc',
  }],
  ['flex-config', {
    pkg: 'actionscript3',
    filename: 'flex config',
    scopeName: 'text.xml.flex-config',
  }],
  ['ada', {
    pkg: 'ada',
    filename: 'ada',
    scopeName: 'source.ada',
  }],
  ['angularjs', {
    pkg: 'angularjs',
    filename: 'angularjs',
    scopeName: 'text.html.angular',
  }],
  ['ansible', {
    pkg: 'ansible',
    filename: 'ansible',
    scopeName: 'source.ansible',
  }],
  ['apache', {
    pkg: 'apache',
    filename: 'apache',
    scopeName: 'source.apache-config',
  }],
  ['apache-modperl', {
    pkg: 'apache',
    filename: 'mod_perl',
    scopeName: 'source.apache-config.mod_perl',
  }],
  ['apiblueprint', {
    pkg: 'api-blueprint',
    filename: 'apiblueprint',
    scopeName: 'text.html.markdown.source.gfm.apib',
  }],
  ['mson', {
    pkg: 'api-blueprint',
    filename: 'mson',
    scopeName: 'text.html.markdown.source.gfm.mson',
  }],
  ['applescript', {
    pkg: 'applescript',
    filename: 'applescript',
    scopeName: 'source.applescript',
  }],
  ['arduino', {
    pkg: 'arduino',
    filename: 'arduino',
    scopeName: 'source.arduino',
  }],
  ['asciidoc', {
    pkg: 'asciidoc',
    filename: 'language-asciidoc',
    scopeName: 'source.asciidoc',
  }],
  ['asciidoc-properties', {
    pkg: 'asciidoc',
    filename: 'language-properties',
    scopeName: 'source.asciidoc.properties',
    include: true,
  }],
  ['asp', {
    pkg: 'asp',
    filename: 'asp',
    scopeName: 'source.asp',
  }],
  ['asp-html', {
    pkg: 'asp',
    filename: 'html-asp',
    scopeName: 'text.html.asp',
  }],
  ['ashx', {
    pkg: 'aspx',
    filename: 'ashx',
    scopeName: 'source.cs.ashx',
  }],
  ['aspx', {
    pkg: 'aspx',
    filename: 'html-aspx',
    scopeName: 'text.html.aspx',
  }],
  ['asm-x86', {
    pkg: 'x86asm',
    filename: 'x86-assembly',
    scopeName: 'source.asm.x86',
  }],
  ['asm-x86-64', {
    pkg: 'x86_64-assembly',
    filename: 'x86_64 assembly',
    scopeName: 'source.asm.x86_64',
  }],
  ['asm-mips', {
    pkg: 'mips',
    filename: 'mips',
    scopeName: 'source.mips',
  }],
  ['asm-arm', {
    pkg: 'arm',
    filename: 'arm',
    scopeName: 'source.arm',
  }],
  ['autohotkey', {
    pkg: 'autohotkey',
    filename: 'autohotkey',
    scopeName: 'source.ahk',
  }],
  ['autoitv3', {
    pkg: 'autoitv3',
    filename: 'autoitv3',
    scopeName: 'source.autoit.3',
  }],
  ['awk', {
    pkg: 'awk',
    filename: 'awk',
    scopeName: 'source.awk',
  }],
  ['batchfile', {
    pkg: 'batchfile',
    filename: 'batchfile',
    scopeName: 'source.batchfile',
  }],
  ['bison', {
    pkg: 'bison',
    filename: 'bison',
    scopeName: 'source.bison',
  }],
  ['blade', {
    pkg: 'blade',
    filename: 'blade',
    scopeName: 'text.html.php.blade',
  }],
  ['bolt', {
    pkg: 'bolt',
    filename: 'bolt',
    scopeName: 'source.bolt',
  }],
  ['brainfuck', {
    pkg: 'brainfuck',
    filename: 'brainfuck',
    scopeName: 'source.brainfuck',
  }],
  ['brightscript', {
    pkg: 'brightscript',
    filename: 'brightscript',
    scopeName: 'source.brightscript',
  }],
  ['c', {
    pkg: 'c',
    filename: 'c',
    scopeName: 'source.c',
  }],
  ['cpp', {
    pkg: 'cpp14',
    filename: 'cpp',
    scopeName: 'source.cpp',
  }],
  ['cfml', {
    pkg: 'cfml',
    filename: 'cfml',
    scopeName: 'source.cfml',
  }],
  ['cfscript', {
    pkg: 'cfml',
    filename: 'cfscript',
    scopeName: 'source.cfscript',
  }],
  ['cfml-html', {
    pkg: 'cfml',
    filename: 'html-cfml',
    scopeName: 'text.html.cfml',
  }],
  ['chef', {
    pkg: 'chef',
    filename: 'chef-recipes',
    scopeName: 'source.ruby.chef',
  }],
  ['cisco', {
    pkg: 'cisco',
    filename: 'cisco',
    scopeName: 'source.cisco-ios-config',
  }],
  ['clips', {
    pkg: 'clips',
    filename: 'clips',
    scopeName: 'source.clips',
  }],
  ['clojure', {
    pkg: 'clojure',
    filename: 'clojure',
    scopeName: 'source.clojure',
  }],
  ['coffeescript', {
    pkg: 'coffee-script',
    filename: 'coffeescript',
    scopeName: 'source.coffee',
  }],
  ['litcoffee', {
    pkg: 'coffee-script',
    filename: 'coffeescript (literate)',
    scopeName: 'source.litcoffee',
  }],
  ['cobol', {
    pkg: 'cobol',
    filename: 'cobol',
    scopeName: 'source.cobol',
  }],
  ['jcl', {
    pkg: 'cobol',
    filename: 'jcl',
    scopeName: 'source.jcl',
  }],
  ['cmake-listfile', {
    pkg: 'cmake',
    filename: 'cmake listfile',
    scopeName: 'source.cmake',
  }],
  ['cmake-cache', {
    pkg: 'cmake',
    filename: 'cmake cache',
    scopeName: 'source.cache.cmake',
  }],
  ['cmake-template', {
    pkg: 'cmake',
    filename: 'cmake template',
    scopeName: 'source.cmake.template',
    include: true,
  }],
  ['cmake-c', {
    pkg: 'cmake',
    filename: 'cmake template c',
    scopeName: 'source.cmake.template.c',
  }],
  ['cmake-cpp', {
    pkg: 'cmake',
    filename: 'cmake template cpp',
    scopeName: 'source.cmake.template.cpp',
  }],
  ['cmake-python', {
    pkg: 'cmake',
    filename: 'cmake template python',
    scopeName: 'source.cmake.template.cmake',
  }],
  ['cmake-shellscript', {
    pkg: 'cmake',
    filename: 'cmake template shell-unix-bash',
    scopeName: 'source.cmake.template.shell',
  }],
  ['cmake-batchfile', {
    pkg: 'cmake',
    filename: 'cmake template batch',
    scopeName: 'source.cmake.template.bat',
  }],
  ['cmake-cmake', {
    pkg: 'cmake',
    filename: 'cmake template cmake',
    scopeName: 'source.cmake.template.cmake',
  }],
  ['common-lisp', {
    pkg: 'common-lisp',
    filename: 'lisp',
    scopeName: 'source.common.lisp',
  }],
  ['config', {
    pkg: 'generic-config',
    filename: 'generic-config',
    scopeName: 'text.generic-config',
  }],
  ['crontab', {
    pkg: 'crontab',
    filename: 'crontab',
    scopeName: 'source.crontab',
  }],
  ['crystal', {
    pkg: 'crystal',
    filename: 'crystal',
    scopeName: 'source.crystal',
  }],
  ['ecr', {
    pkg: 'crystal',
    filename: 'html (crystal - ecr)',
    scopeName: 'text.html.ecr',
  }],
  ['csharp', {
    pkg: 'csharp',
    filename: 'csharp',
    scopeName: 'source.cs',
  }],
  ['csharp-cake', {
    pkg: 'csharp',
    filename: 'cake',
    scopeName: 'source.cake',
  }],
  ['csharp-csx', {
    pkg: 'csharp',
    filename: 'csx',
    scopeName: 'source.csx',
  }],
  ['cshtml', {
    pkg: 'cshtml',
    filename: 'cshtml',
    scopeName: 'text.html.cshtml',
  }],
  ['css', {
    pkg: 'css',
    filename: 'css',
    scopeName: 'source.css',
  }],
  ['csv', {
    pkg: 'csv',
    filename: 'language-csv',
    scopeName: 'text.csv',
  }],
  ['csv-semicolon', {
    pkg: 'csv',
    filename: 'language-csv-semicolon',
    scopeName: 'text.csv.semicolon',
  }],
  ['cuda', {
    pkg: 'cuda',
    filename: 'cuda',
    scopeName: 'source.cuda',
  }],
  ['d', {
    pkg: 'd',
    filename: 'd',
    scopeName: 'source.d',
  }],
  ['dart', {
    pkg: 'dart',
    filename: 'dart',
    scopeName: 'source.dart',
  }],
  ['dart-yaml', {
    pkg: 'dart',
    filename: 'yaml-ext',
    scopeName: 'source.yaml-ext',
  }],
  ['debian-control', {
    pkg: 'debian',
    filename: 'debian package control file',
    scopeName: 'source.deb-control',
  }],
  ['debian-rules', {
    pkg: 'debian',
    filename: 'debian package rules',
    scopeName: 'source.debian.makefile',
  }],
  ['diff', {
    pkg: 'diff',
    filename: 'diff',
    scopeName: 'source.diff',
  }],
  ['django-template', {
    pkg: 'django-templates',
    filename: 'html (django)',
    scopeName: 'text.html.django',
  }],
  ['dockerfile', {
    pkg: 'docker',
    filename: 'dockerfile',
    scopeName: 'source.dockerfile',
  }],
  ['dockerignore', {
    pkg: 'docker',
    filename: 'dockerignore',
    scopeName: 'source.dockerignore',
  }],
  ['dot', {
    pkg: 'dot',
    filename: 'dot',
    scopeName: 'source.dot',
  }],
  ['dotfiles', {
    pkg: 'dots',
    filename: 'dots',
    scopeName: 'source.dots',
  }],
  ['doxyfile', {
    pkg: 'doxygen',
    filename: 'doxyfile',
    scopeName: 'source.doxyfile',
  }],
  ['dustjs', {
    pkg: 'dustjs',
    filename: 'dustjs',
    scopeName: 'text.html.dustjs',
  }],
  ['ejs', {
    pkg: 'ejs',
    filename: 'javascript template',
    scopeName: 'text.html.js',
  }],
  ['elixir', {
    pkg: 'elixir',
    filename: 'elixir',
    scopeName: 'source.elixir',
  }],
  ['eex', {
    pkg: 'elixir',
    filename: 'eex',
    scopeName: 'text.elixir',
  }],
  ['eex-html', {
    pkg: 'elixir',
    filename: 'html (eex)',
    scopeName: 'text.html.elixir',
  }],
  ['eex-xml', {
    pkg: 'elixir',
    filename: 'xml (eex)',
    scopeName: 'text.xml.elixir',
  }],
  ['elm', {
    pkg: 'elm',
    filename: 'elm',
    scopeName: 'source.elm',
  }],
  ['elmx', {
    pkg: 'elmx',
    filename: 'elmx',
    scopeName: 'source.elm.elmx',
  }],
  ['emacs-lisp', {
    pkg: 'emacs-lisp',
    filename: 'emacs-lisp',
    scopeName: 'source.emacs.lisp',
  }],
  ['erlang', {
    pkg: 'erlang',
    filename: 'erlang',
    scopeName: 'source.erlang',
  }],
  ['erlang-html', {
    pkg: 'erlang',
    filename: 'html (erlang)',
    scopeName: 'text.html.erlang.yaws',
  }],
  ['expressionengine', {
    pkg: 'expressionengine',
    filename: 'ee',
    scopeName: 'text.html.ee',
  }],
  ['fish', {
    pkg: 'fish',
    filename: 'fish',
    scopeName: 'source.fish',
  }],
  ['fortran-fixed', {
    pkg: 'fortran',
    filename: 'fortran - fixed form',
    scopeName: 'source.fortran.fixed',
  }],
  ['fortran-free', {
    pkg: 'fortran',
    filename: 'fortran - free form',
    scopeName: 'source.fortran.free',
  }],
  ['fortran-modern', {
    pkg: 'fortran',
    filename: 'fortran - modern',
    scopeName: 'source.fortran.modern',
  }],
  ['fortran-preprocessor', {
    pkg: 'fortran',
    filename: 'fortran - preprocessor',
    scopeName: 'source.fortran.preprocessor',
  }],
  ['fortran-punchcard', {
    pkg: 'fortran',
    filename: 'fortran - punchcard',
    scopeName: 'source.fortran.punchcard',
  }],
  ['freemarker', {
    pkg: 'freemarker',
    filename: 'freemarker',
    scopeName: 'text.html.ftl',
  }],
  ['fsharp', {
    pkg: 'fsharp',
    filename: 'f#',
    scopeName: 'source.fsharp',
  }],
  ['gdscript', {
    pkg: 'gdscript',
    filename: 'gdscript',
    scopeName: 'source.gdscript',
  }],
  ['gettext', {
    pkg: 'gettext',
    filename: 'gettext',
    scopeName: 'source.po',
  }],
  ['gherkin', {
    pkg: 'gherkin',
    filename: 'gherkin',
    scopeName: 'source.feature',
  }],
  ['gfm', {
    pkg: 'gfm',
    filename: 'gfm',
    scopeName: 'source.gfm',
  }],
  ['git-commit', {
    pkg: 'git',
    filename: 'git commit message',
    scopeName: 'text.git-commit',
  }],
  ['git-config', {
    pkg: 'git',
    filename: 'git config',
    scopeName: 'source.git-config',
  }],
  ['git-rebase', {
    pkg: 'git',
    filename: 'git rebase message',
    scopeName: 'text.git-rebase',
  }],
  ['gitignore', {
    pkg: 'gitignore',
    filename: 'gitignore',
    scopeName: 'source.gitignore',
  }],
  ['glsl', {
    pkg: 'glsl',
    filename: 'glsl',
    scopeName: 'source.glsl',
  }],
  ['go', {
    pkg: 'go',
    filename: 'go',
    scopeName: 'source.go',
  }],
  ['go-template', {
    pkg: 'go',
    filename: 'gotemplate',
    scopeName: 'source.gotemplate',
  }],
  ['go-template-html', {
    pkg: 'go',
    filename: 'gohtml',
    scopeName: 'text.html.gohtml',
  }],
  ['gradle', {
    pkg: 'gradle',
    filename: 'gradle build script',
    scopeName: 'source.groovy.gradle',
  }],
  ['graphql', {
    pkg: 'graphql',
    filename: 'graphql',
    scopeName: 'source.graphql',
  }],
  ['groovy', {
    pkg: 'groovy',
    filename: 'groovy',
    scopeName: 'source.groovy',
  }],
  ['haml', {
    pkg: 'haml',
    filename: 'ruby haml',
    scopeName: 'text.haml',
  }],
  ['haml-coffee', {
    pkg: 'haml',
    filename: 'coffee haml',
    scopeName: 'text.hamlc',
  }],
  ['handlebars', {
    pkg: 'handlebars',
    filename: 'handlebars',
    scopeName: 'text.html.handlebars',
  }],
  ['haproxy', {
    pkg: 'haproxy',
    filename: 'haproxy',
    scopeName: 'source.haproxy-config',
  }],
  ['haskell', {
    pkg: 'haskell',
    filename: 'haskell',
    scopeName: 'source.haskell',
  }],
  ['lithaskell', {
    pkg: 'haskell',
    filename: 'literate haskell',
    scopeName: 'text.tex.latex.haskell',
  }],
  ['cabal', {
    pkg: 'haskell',
    filename: 'cabal',
    scopeName: 'source.cabal',
  }],
  ['haxe', {
    pkg: 'haxe',
    filename: 'haxe-grammars',
    scopeName: 'source.haxe',
  }],
  ['haxe-hxml', {
    pkg: 'haxe',
    filename: 'hxml-grammars',
    scopeName: 'source.hxml',
  }],
  ['hosts', {
    pkg: 'hosts',
    filename: 'hosts',
    scopeName: 'source.hosts',
  }],
  ['hql', {
    pkg: 'hql',
    filename: 'hql',
    scopeName: 'source.hql',
  }],
  ['htaccess', {
    pkg: 'htaccess',
    filename: 'htaccess',
    scopeName: 'htaccess',
  }],
  ['html', {
    pkg: 'html',
    filename: 'html',
    scopeName: 'text.html.basic',
  }],
  ['hyperlink', {
    pkg: 'hyperlink',
    filename: 'hyperlink',
    scopeName: 'text.hyperlink',
  }],
  ['ignore', {
    pkg: 'ignore',
    filename: 'language-ignore',
    scopeName: 'text.ignore',
  }],
  ['slugignore', {
    pkg: 'ignore',
    filename: 'language-ignore-slug',
    scopeName: 'text.ignore.slugignore',
  }],
  ['hignore', {
    pkg: 'ignore',
    filename: 'language-ignore-mercurial',
    scopeName: 'text.ignore.hgignore',
  }],
  ['ini', {
    pkg: 'ini',
    filename: 'ini',
    scopeName: 'source.ini',
  }],
  ['jade', {
    pkg: 'jade',
    filename: 'jade',
    scopeName: 'source.jade',
  }],
  ['pyjade', {
    pkg: 'jade',
    filename: 'pyjade',
    scopeName: 'source.pyjade',
  }],
  ['java', {
    pkg: 'java',
    filename: 'java',
    scopeName: 'source.java',
  }],
  ['java-properties', {
    pkg: 'java',
    filename: 'javaproperties',
    scopeName: 'source.java-properties',
    include: true,
  }],
  ['java-junit', {
    pkg: 'java',
    filename: 'junit test report',
    scopeName: 'text.junit-test-report',
  }],
  ['java-jsp', {
    pkg: 'java',
    filename: 'java server pages (jsp)',
    scopeName: 'text.html.jsp',
  }],
  ['javascript', {
    pkg: 'javascript',
    filename: 'javascript',
    scopeName: 'source.js',
  }],
  ['javascript-regexp', {
    pkg: 'javascript',
    filename: 'regular expressions (javascript)',
    scopeName: 'source.js.regexp',
    include: true,
  }],
  ['javascript-regexp-repl', {
    pkg: 'javascript',
    filename: 'regular expression replacement (javascript)',
    scopeName: 'source.js.regexp.replacement',
    include: true,
  }],
  ['jinja2', {
    pkg: 'jinja2',
    filename: 'jinja templates',
    scopeName: 'source.jinja',
  }],
  ['jinja2-html', {
    pkg: 'jinja2',
    filename: 'html (jinja templates)',
    scopeName: 'text.html.jinja',
  }],
  ['jinja2-python', {
    pkg: 'jinja2',
    filename: 'python (jinja templates)',
    scopeName: 'source.python.jinja',
  }],
  ['jinja2-conf', {
    pkg: 'jinja2',
    filename: 'conf (jinja templates)',
    scopeName: 'text.generic-config.jinja',
  }],
  ['jinja2-markdown', {
    pkg: 'jinja2',
    filename: 'markdown (jinja templates)',
    scopeName: 'source.gfm.jinja',
  }],
  ['jinja2-shell-script', {
    pkg: 'jinja2',
    filename: 'shell (jinja templates)',
    scopeName: 'source.shell.jinja',
  }],
  ['jinja2-xml', {
    pkg: 'jinja2',
    filename: 'xml (jinja templates)',
    scopeName: 'text.xml.jinja',
  }],
  ['jinja2-yaml', {
    pkg: 'jinja2',
    filename: 'yaml (jinja templates)',
    scopeName: 'source.yaml.jinja',
  }],
  ['json', {
    pkg: 'json',
    filename: 'json',
    scopeName: 'source.json',
  }],
  ['julia', {
    pkg: 'julia',
    filename: 'julia',
    scopeName: 'source.julia',
  }],
  ['julia-console', {
    pkg: 'julia',
    filename: 'julia-console',
    scopeName: 'text.julia.console',
  }],
  ['junos', {
    pkg: 'junos',
    filename: 'junos',
    scopeName: 'source.juniper-junos-config',
  }],
  ['kivy', {
    pkg: 'kivy',
    filename: 'kv',
    scopeName: 'source.kv',
  }],
  ['kotlin', {
    pkg: 'kotlin',
    filename: 'kotlin',
    scopeName: 'source.kotlin',
  }],
  ['latex', {
    pkg: 'latex',
    filename: 'latex',
    scopeName: 'text.tex.latex',
  }],
  ['tex', {
    pkg: 'latex',
    filename: 'tex',
    scopeName: 'text.tex',
  }],
  ['latex-memoir', {
    pkg: 'latex',
    filename: 'latex-memoir',
    scopeName: 'text.tex.latex.memoir',
  }],
  ['latex-log', {
    pkg: 'latex',
    filename: 'latex-log',
    scopeName: 'text.log.latex',
  }],
  ['latex-beamer', {
    pkg: 'latex',
    filename: 'latex-beamer',
    scopeName: 'text.tex.latex.beamer',
  }],
  ['bibtex', {
    pkg: 'latex',
    filename: 'bibtex',
    scopeName: 'text.bibtex',
  }],
  ['leaf', {
    pkg: 'leaf',
    filename: 'leaf',
    scopeName: 'text.html.leaf',
  }],
  ['less', {
    pkg: 'less',
    filename: 'less',
    scopeName: 'source.css.less',
  }],
  ['liquid-html', {
    pkg: 'liquid',
    filename: 'html (liquid)',
    scopeName: 'text.html.liquid',
  }],
  ['liquid-scss', {
    pkg: 'liquid',
    filename: 'scss (liquid)',
    scopeName: 'source.css.scss.liquid',
  }],
  ['lisp', {
    pkg: 'lisp',
    filename: 'lisp',
    scopeName: 'source.lisp',
  }],
  ['livescript', {
    pkg: 'livescript',
    filename: 'coffeescript',
    scopeName: 'source.livescript',
  }],
  ['llvm', {
    pkg: 'llvm',
    filename: 'llvm',
    scopeName: 'source.llvm',
  }],
  ['log', {
    pkg: 'log',
    filename: 'log',
    scopeName: 'source.log',
  }],
  ['logstash', {
    pkg: 'logstash',
    filename: 'logstash',
    scopeName: 'source.logstash',
  }],
  ['lua', {
    pkg: 'lua',
    filename: 'lua',
    scopeName: 'source.lua',
  }],
  ['make', {
    pkg: 'make',
    filename: 'makefile',
    scopeName: 'source.makefile',
  }],
  ['mako', {
    pkg: 'mako',
    filename: 'html (mako)',
    scopeName: 'text.html.mako',
  }],
  ['markdown', {
    pkg: 'markdown',
    filename: 'language-markdown',
    scopeName: 'text.md',
  }],
  ['marko', {
    pkg: 'marko',
    filename: 'marko',
    scopeName: 'text.marko',
  }],
  ['mathematica', {
    pkg: 'mathematica',
    filename: 'mathematica',
    scopeName: 'source.mathematica',
  }],
  ['matlab', {
    pkg: 'matlab',
    filename: 'matlab',
    scopeName: 'source.matlab',
  }],
  ['octave', {
    pkg: 'matlab',
    filename: 'octave',
    scopeName: 'source.octave',
  }],
  ['mediawiki', {
    pkg: 'mediawiki',
    filename: 'mediawiki',
    scopeName: 'text.html.mediawiki',
  }],
  ['mjml', {
    pkg: 'mjml',
    filename: 'mjml',
    scopeName: 'text.mjml.basic',
  }],
  ['modelica', {
    pkg: 'modelica',
    filename: 'modelica',
    scopeName: 'source.modelica',
  }],
  ['modelicascript', {
    pkg: 'modelica',
    filename: 'modelicascript',
    scopeName: 'source.modelicascript',
  }],
  ['mongodb-js', {
    pkg: 'mongodb',
    filename: 'mongodb (javascript)',
    scopeName: 'source.js.mongodb',
  }],
  ['mustache', {
    pkg: 'mustache',
    filename: 'mustache',
    scopeName: 'text.html.mustache',
  }],
  ['mustache-sql', {
    pkg: 'mustache',
    filename: 'sql with mustaches',
    scopeName: 'source.sql.mustache',
  }],
  ['mxml', {
    pkg: 'flex',
    filename: 'mxml',
    scopeName: 'text.xml.mxml',
  }],
  ['nagios', {
    pkg: 'nagios',
    filename: 'nagios-cfg',
    scopeName: 'source.nagios',
  }],
  ['nftables', {
    pkg: 'nftables',
    filename: 'nftables',
    scopeName: 'source.nft',
  }],
  ['nginx', {
    pkg: 'nginx',
    filename: 'nginx',
    scopeName: 'source.nginx',
  }],
  ['nsis', {
    pkg: 'nsis',
    filename: 'nsis',
    scopeName: 'source.nsis',
  }],
  ['nlf', {
    pkg: 'nsis',
    filename: 'nlf',
    scopeName: 'source.nlf',
  }],
  ['nunjucks', {
    pkg: 'nunjucks',
    filename: 'nunjucks templates',
    scopeName: 'source.nunjucks',
  }],
  ['nunjucks-html', {
    pkg: 'nunjucks',
    filename: 'html (nunjucks templates)',
    scopeName: 'text.html.nunjucks',
  }],
  ['objective-c', {
    pkg: 'objective-c',
    filename: 'objective-c',
    scopeName: 'source.objc',
  }],
  ['objective-cpp', {
    pkg: 'objective-c',
    filename: 'objective-c++',
    scopeName: 'source.objcpp',
  }],
  ['objective-c-strings', {
    pkg: 'objective-c',
    filename: 'strings file',
    scopeName: 'source.strings',
    include: true,
  }],
  ['ocaml', {
    pkg: 'ocaml',
    filename: 'ocaml',
    scopeName: 'source.ocaml',
  }],
  ['ocamllex', {
    pkg: 'ocaml',
    filename: 'ocamllex',
    scopeName: 'source.ocamllex',
  }],
  ['menhir', {
    pkg: 'ocaml',
    filename: 'menhir',
    scopeName: 'source.menhir',
  }],
  ['camlp4', {
    pkg: 'ocaml',
    filename: 'camlp4',
    scopeName: 'source.camlp4.ocaml',
  }],
  ['opencl', {
    pkg: 'opencl',
    filename: 'opencl',
    scopeName: 'source.opencl',
  }],
  ['openscad', {
    pkg: 'openscad',
    filename: 'openscad',
    scopeName: 'source.scad',
  }],
  ['pascal', {
    pkg: 'pascal',
    filename: 'pascal',
    scopeName: 'source.pascal',
  }],
  ['patch', {
    pkg: 'patch',
    filename: 'patch',
    scopeName: 'source.patch',
  }],
  ['pegjs', {
    pkg: 'pegjs',
    filename: 'pegjs',
    scopeName: 'source.pegjs',
  }],
  ['pegcoffee', {
    pkg: 'pegjs',
    filename: 'pegcoffee',
    scopeName: 'source.pegcoffee',
  }],
  ['perl', {
    pkg: 'perl',
    filename: 'perl',
    scopeName: 'source.perl',
  }],
  ['perl6', {
    pkg: 'perl',
    filename: 'perl 6',
    scopeName: 'source.perl6',
  }],
  ['php', {
    pkg: 'php',
    filename: 'php',
    scopeName: 'source.php',
  }],
  ['pl-pgsql', {
    pkg: 'pgsql',
    filename: 'pg sql',
    scopeName: 'source.pgsql',
  }],
  ['pl-sql', {
    pkg: 'oracle',
    filename: 'pl sql (oracle)',
    scopeName: 'source.plsql.oracle',
  }],
  ['plantuml', {
    pkg: 'plantuml',
    filename: 'plantuml',
    scopeName: 'source.plantuml',
  }],
  ['pony', {
    pkg: 'pony',
    filename: 'pony',
    scopeName: 'source.pony',
  }],
  ['postcss', {
    pkg: 'postcss',
    filename: 'postcss',
    scopeName: 'source.css.postcss',
  }],
  ['sugarss', {
    pkg: 'postcss',
    filename: 'sugarss',
    scopeName: 'source.css.postcss.sugarss',
  }],
  ['powershell', {
    pkg: 'powershell',
    filename: 'powershell',
    scopeName: 'source.powershell',
  }],
  ['processing', {
    pkg: 'processing',
    filename: 'processing',
    scopeName: 'source.processing',
  }],
  ['property-list', {
    pkg: 'property-list',
    filename: 'property list (xml)',
    scopeName: 'text.xml.plist',
  }],
  ['property-list-old', {
    pkg: 'property-list',
    filename: 'property list (old-style)',
    scopeName: 'source.plist',
  }],
  ['prolog', {
    pkg: 'prolog',
    filename: 'prolog',
    scopeName: 'source.prolog',
  }],
  ['protobuf', {
    pkg: 'protobuf',
    filename: 'protocol buffer',
    scopeName: 'source.protobuf',
  }],
  ['pug', {
    pkg: 'pug',
    filename: 'pug',
    scopeName: 'source.pug',
  }],
  ['puppet', {
    pkg: 'puppet',
    filename: 'puppet',
    scopeName: 'source.puppet',
  }],
  ['purescript', {
    pkg: 'purescript',
    filename: 'purescript',
    scopeName: 'source.purescript',
  }],
  ['python', {
    pkg: 'python',
    filename: 'python',
    scopeName: 'source.python',
  }],
  ['python-regexp', {
    pkg: 'python',
    filename: 'regular expressions (python)',
    scopeName: 'source.regexp.python',
    include: true,
  }],
  ['python-console', {
    pkg: 'python',
    filename: 'python-console',
    scopeName: 'text.python.console',
  }],
  ['python-traceback', {
    pkg: 'python',
    filename: 'python-traceback',
    scopeName: 'text.python.traceback',
  }],
  ['qml', {
    pkg: 'qml',
    filename: 'qml',
    scopeName: 'source.qml',
  }],
  ['qtpro', {
    pkg: 'qtpro',
    filename: 'qtpro',
    scopeName: 'source.pro',
  }],
  ['r', {
    pkg: 'r',
    filename: 'r',
    scopeName: 'source.r',
  }],
  ['r-documentation', {
    pkg: 'r',
    filename: 'rd',
    scopeName: 'text.tex.latex.rd',
  }],
  ['racket', {
    pkg: 'racket',
    filename: 'racket',
    scopeName: 'source.racket',
  }],
  ['scribble', {
    pkg: 'racket',
    filename: 'scribble',
    scopeName: 'source.scribble',
  }],
  ['rdf-turtle', {
    pkg: 'rdf',
    filename: 'turtle',
    scopeName: 'source.turtle',
  }],
  ['rdf-n-triples', {
    pkg: 'rdf',
    filename: 'ntriples',
    scopeName: 'source.ntriples',
  }],
  ['rdf-trig', {
    pkg: 'rdf',
    filename: 'trig',
    scopeName: 'source.trig',
  }],
  ['jsx', {
    pkg: 'react-jsx',
    filename: 'JavaScript (JSX)',
    scopeName: 'source.js.jsx',
  }],
  ['cjsx', {
    pkg: 'react-jsx',
    filename: 'CoffeeScript (JSX)',
    scopeName: 'source.coffee.jsx',
  }],
  ['restructuredtext', {
    pkg: 'restructuredtext',
    filename: 'restructuredtext',
    scopeName: 'text.restructuredtext',
  }],
  ['review', {
    pkg: 'review',
    filename: 'review',
    scopeName: 'source.re',
  }],
  ['riot', {
    pkg: 'riot-tag',
    filename: 'riot-tag',
    scopeName: 'text.html.riot',
  }],
  ['robot', {
    pkg: 'robot-framework',
    filename: 'robottxt',
    scopeName: 'text.robot',
  }],
  ['rspec', {
    pkg: 'rspec',
    filename: 'rspec',
    scopeName: 'source.ruby.rspec',
  }],
  ['ruby', {
    pkg: 'ruby',
    filename: 'ruby',
    scopeName: 'source.ruby',
  }],
  ['erb', {
    pkg: 'ruby',
    filename: 'html (ruby - erb)',
    scopeName: 'text.html.erb',
  }],
  ['erb-js', {
    pkg: 'ruby-on-rails',
    filename: 'javascript (rails)',
    scopeName: 'source.js.rails source.js.jquery',
  }],
  ['erb-sql', {
    pkg: 'ruby-on-rails',
    filename: 'sql (rails)',
    scopeName: 'source.sql.ruby',
  }],
  ['ruby-on-rails', {
    pkg: 'ruby-on-rails',
    filename: 'ruby on rails',
    scopeName: 'source.ruby.rails',
  }],
  ['rust', {
    pkg: 'rust',
    filename: 'rust',
    scopeName: 'source.rust',
  }],
  ['salt', {
    pkg: 'salt',
    filename: 'salt',
    scopeName: 'source.salt',
  }],
  ['sass', {
    pkg: 'sass',
    filename: 'sass',
    scopeName: 'source.sass',
  }],
  ['scss', {
    pkg: 'sass',
    filename: 'scss',
    scopeName: 'source.css.scss',
  }],
  ['scala', {
    pkg: 'scala',
    filename: 'scala',
    scopeName: 'source.scala',
  }],
  ['scheme', {
    pkg: 'scheme',
    filename: 'scheme',
    scopeName: 'source.scheme',
  }],
  ['serpent', {
    pkg: 'ethereum',
    filename: 'serpent',
    scopeName: 'source.serpent',
  }],
  ['serpent-regexp', {
    pkg: 'ethereum',
    filename: 'regular expressions (serpent)',
    scopeName: 'source.regexp.serpent',
    include: true,
  }],
  ['serpent-console', {
    pkg: 'ethereum',
    filename: 'ethereum-console',
    scopeName: 'text.serpent.console',
  }],
  ['serpent-traceback', {
    pkg: 'ethereum',
    filename: 'ethereum-traceback',
    scopeName: 'text.serpent.traceback',
  }],
  ['solidity', {
    pkg: 'ethereum',
    filename: 'solidity',
    scopeName: 'source.solidity',
  }],
  ['bash', {
    pkg: 'shellscript',
    filename: 'shell-unix-bash',
    scopeName: 'source.shell',
  }],
  ['shell-script', {
    pkg: 'shellscript',
    filename: 'shell-unix-bash',
    scopeName: 'source.shell',
  }],
  ['shell-script-session', {
    pkg: 'shellscript',
    filename: 'shell-session',
    scopeName: 'text.shell-session',
  }],
  ['shaderlab', {
    pkg: 'unity-shader-files',
    filename: 'shaderlab',
    scopeName: 'source.shaderlab',
  }],
  ['spacebars', {
    pkg: 'spacebars',
    filename: 'spacebars',
    scopeName: 'text.html.spacebars',
  }],
  ['slim', {
    pkg: 'slim',
    filename: 'ruby slim',
    scopeName: 'text.slim',
  }],
  ['smarty', {
    pkg: 'smarty',
    filename: 'smarty',
    scopeName: 'text.html.smarty',
  }],
  ['sml', {
    pkg: 'sml',
    filename: 'standard ml',
    scopeName: 'source.ml',
  }],
  ['sml-mlb', {
    pkg: 'sml',
    filename: 'mlb',
    scopeName: 'source.mlb',
  }],
  ['sml-cm', {
    pkg: 'sml',
    filename: 'cm',
    scopeName: 'source.cm',
  }],
  ['soy', {
    pkg: 'soy',
    filename: 'soy',
    scopeName: 'text.html.soy',
  }],
  ['sql', {
    pkg: 'sql',
    filename: 'sql',
    scopeName: 'source.sql',
  }],
  ['stan', {
    pkg: 'stan',
    filename: 'language-stan',
    scopeName: 'source.stan',
  }],
  ['stylus', {
    pkg: 'stylus',
    filename: 'stylus',
    scopeName: 'source.css.stylus',
  }],
  ['svg', {
    pkg: 'svg',
    filename: 'svg',
    scopeName: 'text.xml.svg',
  }],
  ['swift', {
    pkg: 'swift',
    filename: 'swift',
    scopeName: 'source.swift',
  }],
  ['swig', {
    pkg: 'html-swig',
    filename: 'html (swig)',
    scopeName: 'text.html.swig',
  }],
  ['systemd', {
    pkg: 'systemd',
    filename: 'systemd service',
    scopeName: 'source.service',
  }],
  ['tcl', {
    pkg: 'tcl',
    filename: 'tcl',
    scopeName: 'source.tcl',
  }],
  ['tcl-html', {
    pkg: 'tcl',
    filename: 'html (tcl)',
    scopeName: 'text.html.tcl',
  }],
  ['terraform', {
    pkg: 'terraform',
    filename: 'terraform',
    scopeName: 'source.terraform',
  }],
  ['hil', {
    pkg: 'terraform',
    filename: 'interpolated',
    scopeName: 'text.interpolation.hashicorp',
  }],
  ['text', {
    pkg: 'text',
    filename: 'plain text',
    scopeName: 'text.plain',
  }],
  ['textile', {
    pkg: 'textile',
    filename: 'textile',
    scopeName: 'text.html.textile',
  }],
  ['todo', {
    pkg: 'todo',
    filename: 'todo',
    scopeName: 'text.todo',
  }],
  ['toml', {
    pkg: 'toml',
    filename: 'toml',
    scopeName: 'source.toml',
  }],
  ['twig', {
    pkg: 'twig',
    filename: 'twig',
    scopeName: 'source.twig',
  }],
  ['twig-html', {
    pkg: 'twig',
    filename: 'html (twig)',
    scopeName: 'text.html.twig',
  }],
  ['twig-js', {
    pkg: 'twig',
    filename: 'javascript (twig)',
    scopeName: 'source.js.twig',
  }],
  ['twig-json', {
    pkg: 'twig',
    filename: 'JSON (twig)',
    scopeName: 'source.json.twig',
  }],
  ['twig-css', {
    pkg: 'twig',
    filename: 'css (twig)',
    scopeName: 'source.css.twig',
  }],
  ['twig-xml', {
    pkg: 'twig',
    filename: 'xml (twig)',
    scopeName: 'text.xml.twig',
  }],
  ['twig-yaml', {
    pkg: 'twig',
    filename: 'yaml (twig)',
    scopeName: 'source.yaml.twig',
  }],
  ['typescript', {
    pkg: 'typescript',
    filename: 'TypeScript',
    scopeName: 'source.ts',
  }],
  ['typescript-jsx', {
    pkg: 'typescript',
    filename: 'TypeScriptReact',
    scopeName: 'source.tsx',
  }],
  ['uno', {
    pkg: 'fuse',
    filename: 'uno',
    scopeName: 'source.uno',
  }],
  ['vala', {
    pkg: 'vala',
    filename: 'vala',
    scopeName: 'source.vala',
  }],
  ['vb-net', {
    pkg: 'vb-net',
    filename: 'vb.net',
    scopeName: 'source.asp.vb.net',
  }],
  ['vbscript', {
    pkg: 'vbscript',
    filename: 'vbscript',
    scopeName: 'source.vbs',
  }],
  ['velocity', {
    pkg: 'velocity',
    filename: 'velocity',
    scopeName: 'text.velocity',
  }],
  ['velocity-html', {
    pkg: 'velocity',
    filename: 'velocity (html)',
    scopeName: 'text.html.velocity',
  }],
  ['verilog', {
    pkg: 'verilog',
    filename: 'verilog',
    scopeName: 'source.verilog',
  }],
  ['vhdl', {
    pkg: 'vhdl',
    filename: 'vhdl',
    scopeName: 'source.vhdl',
  }],
  ['viml', {
    pkg: 'viml',
    filename: 'viml',
    scopeName: 'source.viml',
  }],
  ['vuejs', {
    pkg: 'vue',
    filename: 'vue',
    scopeName: 'text.html.vue',
  }],
  ['xml', {
    pkg: 'xml',
    filename: 'xml',
    scopeName: 'text.xml',
  }],
  ['xsl', {
    pkg: 'xml',
    filename: 'xsl',
    scopeName: 'text.xml.xsl',
  }],
  ['yaml', {
    pkg: 'yaml',
    filename: 'yaml',
    scopeName: 'source.yaml',
  }],
]

const grammars = new Map(languages)

export default grammars
