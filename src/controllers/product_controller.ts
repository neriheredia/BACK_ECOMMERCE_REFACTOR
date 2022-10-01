import { Request, Response } from 'express'
import { handleHttpError, handleHttpRes } from '../utils'
import { createNewProduct, getAllProducts, updateProduct } from '../services'

const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const response = await createNewProduct(body)
    const productSaved = await response.save()
    handleHttpRes(res, 201, 'Product created! :D', productSaved)
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_PRODUCT')
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await getAllProducts()
    handleHttpRes(res, 200, 'Successful the products', allProducts)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ALL_PRODUCTS', error)
  }
}

const updateOneProduct = async ({ body }: Request, res: Response) => {
  try {
    const updatedProduct = await updateProduct(body)
    handleHttpRes(res, 200, 'Updated successfuly', updatedProduct)
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_PRODUCT', error)
  }
}

export { createProduct, getProducts, updateOneProduct }
