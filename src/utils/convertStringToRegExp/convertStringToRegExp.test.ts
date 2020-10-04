import convertStringToRegExp from './index'

test('convertStringToRegExp', () => {
  const expected = ['value', 'gi']
  expect(convertStringToRegExp('/value/gi')).toEqual(expect.arrayContaining(expected))
})
