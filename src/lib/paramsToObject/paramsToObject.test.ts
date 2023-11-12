import { expect, test } from 'vitest'
import { paramsToObject } from './paramsToObject'

test('test URLSearchParams', () => {
  const params = new URLSearchParams('?q=a&page=1')
  expect(paramsToObject(params).q).toBe('a')
  expect(paramsToObject(params).page).toBe('1')
})

// TODO: Arrays