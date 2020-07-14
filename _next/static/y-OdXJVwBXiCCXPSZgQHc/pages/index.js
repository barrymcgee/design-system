(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3Y0d":function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("c/WZ")}])},"c/WZ":function(e,n,s){"use strict";s.r(n);var t=s("Ff2n"),a=s("q1tI"),o=s.n(a),i=s("6qfE"),p=s("peEt"),r=s("2LpV"),m=o.a.createElement;n.default=function(e){var n=e.components;Object(t.a)(e,["components"]);return m(i.MDXTag,{name:"wrapper",components:n},m(i.MDXTag,{name:"h1",components:n,props:{id:"priceline-one"}},m(i.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"#priceline-one","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Priceline One"),m(r.c,null,"Priceline Design System ",m(r.b,null,"v",p.version)),m(i.MDXTag,{name:"h2",components:n,props:{id:"sketch-kit"}},m(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#sketch-kit","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Sketch Kit"),m(r.a,{href:"https://github.com/priceline/design-system-sketch/releases/latest"},"Download Sketch Kit"),m(i.MDXTag,{name:"h2",components:n,props:{id:"getting-started"}},m(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#getting-started","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Getting Started"),m(i.MDXTag,{name:"p",components:n},"Install the Design System in your application"),m(i.MDXTag,{name:"pre",components:n},m(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm install pcln-design-system\n")),m(i.MDXTag,{name:"h2",components:n,props:{id:"themeprovider"}},m(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#themeprovider","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"ThemeProvider"),m(i.MDXTag,{name:"p",components:n},"Wrap the root of your application with the ",m(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ThemeProvider")," component,\nwhich adds the Design System theme to context for use in styled-components\nand sets typographic defaults.\nThis should only be included once in your application."),m(i.MDXTag,{name:"p",components:n},"The ThemeProvider is a wrapper around styled-components' ",m(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.styled-components.com/docs/advanced#theming"}},"ThemeProvider"),"."),m(i.MDXTag,{name:"pre",components:n},m(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import React from 'react'\nimport { ThemeProvider } from 'pcln-design-system'\nimport SomeView from './SomeView'\n\nclass App extends React.Component {\n  render() {\n    return (\n      <ThemeProvider>\n        <h1>Hello</h1>\n      </ThemeProvider>\n    )\n  }\n}\n")),m(i.MDXTag,{name:"h2",components:n,props:{id:"montserrat-font"}},m(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#montserrat-font","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Montserrat font"),m(i.MDXTag,{name:"p",components:n},"To use the Montserrat font-family in you project, be sure to include a link in your document ",m(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<head>"),"."),m(i.MDXTag,{name:"pre",components:n},m(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html",metaString:""}},'<link\n  href="https://fonts.googleapis.com/css?family=Montserrat:400,600"\n  rel="stylesheet"\n/>\n')),m(i.MDXTag,{name:"h2",components:n,props:{id:"primitive-ui-components"}},m(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#primitive-ui-components","aria-hidden":"true"}},m(i.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Primitive UI Components"),m(i.MDXTag,{name:"p",components:n},"Import and use the design system UI components in your application."),m(i.MDXTag,{name:"pre",components:n},m(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import React from 'react'\nimport { Box, Text } from 'pcln-design-system'\n\nconst SomeView = (props) => (\n  <Box p={3}>\n    <Text color='blue'>Hello</Text>\n  </Box>\n)\n")))}},peEt:function(e){e.exports=JSON.parse('{"name":"pcln-design-system","version":"3.5.3","description":"Priceline Design System","main":"dist/cjs/index.js","module":"dist/esm/index.js","sideEffects":false,"scripts":{"prepare":"run-s clean build","build":"run-s build:js build:types","build:babel:cjs":"cross-env NODE_ENV=production BABEL_ENV=cjs babel ./src --ignore \'**/*.stories.js,**/*.spec.js\' --out-dir ./dist/cjs","build:babel:esm":"cross-env NODE_ENV=production BABEL_ENV=esm babel ./src --ignore \'**/*.stories.js,**/*.spec.js\' --out-dir ./dist/esm","build:babel:es":"cross-env NODE_ENV=production BABEL_ENV=es babel ./src --ignore \'**/*.stories.js,**/*.spec.js\' --out-dir ./dist/es","build:js":"run-p build:babel:*","build:types":"mkdir -p ./dist/types && cp ../types/types/index.d.ts dist/types","clean":"rimraf dist","test":"jest"},"files":["dist/"],"author":"Priceline","contributors":[{"name":"Brent Jackson","email":"jxnblk@gmail.com"},{"name":"Malek Hakim","email":"hakimelek@gmail.com"},{"name":"Ben Chen","email":"benjaminlchen@gmail.com"},{"name":"Evan Pipta","email":"3pipta@gmail.com"},{"name":"Jonathan Schwarz","email":"jonathan.e.schwarz@gmail.com"},{"name":"Steve Dalonzo","email":"steve.dalonzo@gmail.com"},{"name":"Craig Palermo","email":"email@craigp.me"}],"license":"MIT","devDependencies":{"@babel/cli":"^7.10.1","camelcase":"^5.3.1","cross-env":"^6.0.3","jest":"^26.0.1","npm-run-all":"^4.1.5","react":"^16.13.1","react-dom":"^16.13.1","react-test-renderer":"^16.13.1","rimraf":"^3.0.0","stylis":"^3.5.4"},"jest":{"setupFilesAfterEnv":["../../test/test-setup.js"],"moduleDirectories":["node_modules","../../test"],"testMatch":["<rootDir>/src/**/*.spec.js"]},"dependencies":{"deepmerge":"^4.0.0","hoist-non-react-statics":"^3.3.2","pcln-icons":"^3.0.0","prop-types":"^15.7.2","styled-system":"^4.2.4","@types/styled-system":"^4.2.2"},"peerDependencies":{"react":">=16.3.0","react-dom":">=16.3.0","styled-components":">=3"},"repository":{"type":"git","url":"git+https://github.com/priceline/design-system.git"},"bugs":{"url":"https://github.com/priceline/design-system/issues"},"homepage":"https://github.com/priceline/design-system#readme","engines":{"node":">=8.0.0 <9.0.0 || >=10.0.0","npm":">=5.10.0 || >=6.0.0"}}')}},[["3Y0d",0,1,5,2,3,4]]]);