/* eslint-disable no-undef */
import supertest from 'supertest'
import { app } from '../src/app'

const api = supertest(app)

describe('404 Not Found', () => {
  it('Request /random should receive 404 status code', async () => {
    const { statusCode, body } = await api.get('/api/v1/adoausn').send()
    expect(statusCode).toBe(404)
    expect(body.error).toBe('404_NOT_FOUND')
  })
})
