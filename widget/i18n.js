import zhCn from './lang/zh-cn'

export function t(key) {
  const LOCALE_KEY = 'CUSDIS_LOCALE'

  const locale = window[LOCALE_KEY] || zhCn

  const content = locale[key] || zhCn[key]
  if (!locale[key]) {
    console.warn(
      '[cusdis]',
      'translation of language key',
      `'${key}'`,
      'is missing.',
    )
  }
  return content
}
