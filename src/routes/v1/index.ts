import { NextFunction, Request, Response, Router } from 'express'
import { readdirSync } from 'fs'
import { handleHttpErrorRandom, removeExtension } from '../../utils'

const PATH_ROUTER = `${__dirname}`
const INDEX = 'index'

const router = Router()

// eslint-disable-next-line array-callback-return
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = removeExtension(fileName)
  if (cleanName !== INDEX) {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

router.get('/*', (req: Request, res: Response, next: NextFunction) => {
  handleHttpErrorRandom(res, '404_NOT_FOUND')
  next()
})

export { router }
