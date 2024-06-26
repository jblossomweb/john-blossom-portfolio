/**
 * @jest-environment node
 */
/* eslint-disable import/no-extraneous-dependencies */
import { testApiHandler } from 'next-test-api-route-handler'
import * as PingController from './PingController'

const path = __dirname.split('/src/')[1]

describe(path, () => {
  it('should respond with expected data', async () => {
    await testApiHandler<{ hello: string }>({
      pagesHandler: PingController,
      requestPatcher: (req) => {
        req.headers = { key: process.env.SPECIAL_TOKEN }
      },
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'GET' })
        const data = await res.json()
        expect(res.status).toBe(200)
        expect(data).toMatchSnapshot()
      },
    })
  })
})
