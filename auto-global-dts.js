const path = require('node:path')
const glob = require('fast-glob')
const fs = require('node:fs')
const pkg = require('./packages/core/package.json')

const COMS_BASE_PATH = './packages/components'
const GLOBAL_FILENAME = 'global';

(async() =>
{
  const globalFile = GLOBAL_FILENAME + '.d.ts'
  const comsFiles = await glob([`${COMS_BASE_PATH}/*/src/*.{vue,tsx}`])
  const glbalFnFiles = await glob([`${COMS_BASE_PATH}/**/methods.ts`])

  if (fs.existsSync(GLOBAL_FILENAME))
  
    fs.unlinkSync(globalFile)
  
  // 创建文件
  fs.writeFileSync(globalFile, `
  declare module 'vue' {
    export interface GlobalComponents {{0}}
  }
  declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {{1}}
  }
  export {}
  `)

  const glbalDts = fs.readFileSync(globalFile, 'utf-8')
  
  let componentDeclarations = '\n'
  comsFiles.forEach(file =>
  {
    const componentName = path.basename(file, path.extname(file))
    componentDeclarations += `    U${componentName}: typeof import('${pkg.name}')['U${componentName}'];\n`
  })

  let customProps = '\n'
  glbalFnFiles.forEach(file =>
  {
    let compFnName = path.basename(path.dirname(file))
    let compFnVar = compFnName
    if (~compFnName.indexOf('-'))
    {
      const compFnNameArr = compFnName.split('-')
      compFnVar = compFnNameArr[1]
      compFnName = compFnNameArr.map(v => v.at(0).toUpperCase() + v.slice(1)).join('')
    }
    compFnName = compFnName.at(0).toUpperCase() + compFnName.slice(1)
    customProps += `    $${compFnVar}: typeof import('${pkg.name}')['U${compFnName}Fn'];\n`
  })

  const newGlbalDts = glbalDts.replace(/\{0\}/g, componentDeclarations).replace(/\{1\}/g, customProps)

  fs.writeFileSync(globalFile, newGlbalDts)
  fs.writeFileSync('./packages/core/dist/index.d.ts', newGlbalDts)
  console.log('global.d.ts generated successfully!')
})()