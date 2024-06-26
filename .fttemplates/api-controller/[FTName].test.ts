/**
 * @jest-environment node
 */
import { testApiHandler } from 'next-test-api-route-handler'
import * as <FTName | capitalize> from './[FTName]'

const path = (__dirname.split("/src/")[1])

describe(path, () => {
  it('should respond with expected data', async () => {
    await testApiHandler<{ hello: string }>({
      pagesHandler: <FTName | capitalize>,
      requestPatcher: (req) => {
        req.headers = { key: process.env.SPECIAL_TOKEN }
      },
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'GET' })
        const data = await res.json()
        expect(res.status).toBe(200)
        expect(data).toMatchSnapshot()
      }
    })
  })
})
