import { Router } from 'express'
import { readdirSync } from 'fs'
import { removeExtension } from '../../utils'

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

export { router }
