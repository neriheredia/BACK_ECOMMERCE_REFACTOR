import { Application, Request, Response } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BACK_ECOMMERCE_REFACTOR - Documentation',
      version: '1.0.0',
      description: 'Descripción del back-end.'
    }
  },
  apis: ['src/routes/v1/product.ts']
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerDocs = (app:Application, port:string, version:string):void => {
  app.use(`/${version}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.get(`/${version}/docs.json`, (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'aplication/json')
    res.send(swaggerSpec)
  })
  console.log(`📓 Version ${version} Docs are available at http://localhost:${port}/${version}/docs`)
}
