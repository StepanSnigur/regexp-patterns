// This function will convert this string: '/some-regexp/gi' to array: ['some-regexp', 'gi']

const convertStringToRegExp = (stringRegExp: string): string[] => {
  let regexpBody: string | string[] = stringRegExp.split('')
  regexpBody.shift()
  regexpBody = regexpBody.join('')
  regexpBody = regexpBody.replace(/\/\w+$/g, '')

  const regexpFlags = /\w+$/g.exec(stringRegExp) || ''
  return [regexpBody, regexpFlags.toString()]
}

export default convertStringToRegExp
