import type { NextApiRequest, NextApiResponse } from 'next'

export interface <FTName | capitalize>Response {
  message: string
}

const <FTName | capitalize> = (
  req: NextApiRequest,
  res: NextApiResponse<<FTName | capitalize>Response>
) => {
  res.status(200).json({
    message: 'Response',
  })
}

export default <FTName | capitalize>
