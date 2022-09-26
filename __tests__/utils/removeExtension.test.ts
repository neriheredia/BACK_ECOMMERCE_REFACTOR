/* eslint-disable no-undef */
import { removeExtension } from '../../src/utils'

describe('removeExtension.ts', () => {
  const mockData = ['auth.ts', 'order.ts', 'index.ts', 'product.ts', 'user.ts']
  it('should receive file with extension ".ts"', () => {
    mockData.forEach((fileName) => expect(fileName).toContain('.ts'))
  })
  it('should return the file without the extension ".ts"', () => {
    const response = mockData.map((fileName) => removeExtension(fileName))
    expect(response).toEqual(['auth', 'order', 'index', 'product', 'user'])
  })
})
