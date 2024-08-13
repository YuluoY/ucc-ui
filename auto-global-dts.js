const path = require('node:path')
const glob = require('fast-glob')
const fs = require('node:fs')
const pkg = require('./packages/core/package.json')
const globalComponentsRegex = /GlobalComponents\s*{[^}]*}/;

(async () => {
  const comsFilePath = await glob(['./packages/components/*/src/*.{vue,tsx}'])
  const glbalDtsPath = fs.readFileSync('./global.d.ts', 'utf-8')
  
  let componentDeclarations = ''
  comsFilePath.forEach(file => {
    const componentName = path.basename(file, path.extname(file))
    componentDeclarations += `    U${componentName}: typeof import('${pkg.name}')['U${componentName}'];\n`
  })
  const newGlbalDtsPath = glbalDtsPath.replace(globalComponentsRegex, `GlobalComponents {\n${componentDeclarations}\t}`)
  fs.writeFileSync('./global.d.ts', newGlbalDtsPath)
  fs.writeFileSync('./packages/core/dist/index.d.ts', newGlbalDtsPath)
  console.log('global.d.ts generated successfully!');
})()
