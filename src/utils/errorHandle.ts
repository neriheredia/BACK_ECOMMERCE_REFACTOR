import { Response } from 'express'

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw)
  res.status(500)
  res.send({ error })
}

const handleHttpErrorRandom = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw)
  res.status(404)
  res.send({ error })
}

export { handleHttpError, handleHttpErrorRandom }
