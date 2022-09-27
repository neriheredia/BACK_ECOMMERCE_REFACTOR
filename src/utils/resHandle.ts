import { Response } from 'express'

const handleHttpRes = (res: Response, numberStatus: number, message: string, data:any) => {
  res.status(numberStatus).json({ status: numberStatus, message, data })
}

export { handleHttpRes }
