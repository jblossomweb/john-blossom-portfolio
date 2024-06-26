import type { NextApiRequest, NextApiResponse } from 'next'

export interface PingControllerResponse {
  message: string
}

const PingController = (
  //
  req: NextApiRequest,
  res: NextApiResponse<PingControllerResponse>,
) => {
  res.status(200).json({
    message: 'Pong',
  })
}

export default PingController
