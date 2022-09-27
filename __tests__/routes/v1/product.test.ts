/* eslint-disable no-undef */
import supertest from 'supertest'
import { app } from '../../../src/app'

const api = supertest(app)

describe('GET /api/v1/product', () => {
  test('should respond whit a 200 status code', async () => {
    const resp = await api.get('/api/v1/product').expect(200)
    console.log(resp)
  })
})
