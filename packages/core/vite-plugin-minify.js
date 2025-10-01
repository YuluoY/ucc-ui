import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { minify } from 'terser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Vite 插件：在构建完成后压缩 JS 文件
 * @param {Object} options 配置选项
 * @param {string} options.dir 要压缩的目录，默认为 'dist/es'
 * @param {Object} options.terserOptions terser 压缩选项
 * @returns {Object} Vite 插件对象
 */
export function minifyPlugin(options = {})
{
  const {
    dir = 'dist/es',
    terserOptions = {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      }
    }
  } = options

  return {
    name: 'vite-plugin-minify',
    async writeBundle()
    {
      // 在构建完成后执行压缩
      const distDir = join(__dirname, dir)
      console.log('🔧 Starting post-build minification...')
      
      try
      {
        await minifyJsFiles(distDir, terserOptions)
        console.log('✅ Post-build minification complete!')
      }
      catch (error)
      {
        console.error('❌ Post-build minification failed:', error)
      }
    }
  }
}

/**
 * 递归压缩目录中的所有 JS 文件
 * @param {string} dir 目录路径
 * @param {Object} terserOptions terser 配置选项
 */
async function minifyJsFiles(dir, terserOptions)
{
  try
  {
    const files = readdirSync(dir)
    
    for (const file of files)
    {
      const filePath = join(dir, file)
      const stat = statSync(filePath)
      
      if (stat.isDirectory())
      {
        // 递归处理子目录
        await minifyJsFiles(filePath, terserOptions)
      }
      else if (file.endsWith('.js'))
      {
        // 压缩 JS 文件
        try
        {
          const content = readFileSync(filePath, 'utf-8')
          const result = await minify(content, terserOptions)
          
          if (result.code)
          {
            writeFileSync(filePath, result.code)
            console.log(`  ✓ Minified: ${file}`)
          }
        }
        catch (error)
        {
          console.error(`  ❌ Error minifying ${file}:`, error.message)
        }
      }
    }
  }
  catch (error)
  {
    console.error(`❌ Error reading directory ${dir}:`, error.message)
  }
}
