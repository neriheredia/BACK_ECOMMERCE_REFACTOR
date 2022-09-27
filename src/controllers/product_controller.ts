import { Request, Response } from 'express'
import { handleHttpError, handleHttpRes } from '../utils'
import { createNewProduct } from '../services'

const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const response = await createNewProduct(body)
    const productSaved = await response.save()
    handleHttpRes(res, 201, 'Product created! :D', productSaved)
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_PRODUCT')
  }
}

export { createProduct }
