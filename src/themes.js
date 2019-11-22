// themes.js
import 'mutationobserver-shim'
import cssVars from 'css-vars-ponyfill'

const createLink = (() => {
  let $link = null
  return () => {
    if ($link) {
      return $link
    }
    $link = document.createElement('link')
    $link.rel = 'stylesheet'
    $link.type = 'text/css'
    document.querySelector('head').appendChild($link)
    return $link
  }
})()

/**
 * 主题切换函数
 * @param {string} theme - 主题名称, 默认default
 * @return {string} 主题名称
 */
const toggleTheme = (theme = 'default') => {
  const $link = createLink()
  $link.href = `./themes/${theme}.css`
  cssVars({
    watch: false
  })
  setTimeout(function () {
    cssVars({
      watch: true
    })
  }, 0)
  return theme
}

export default toggleTheme
