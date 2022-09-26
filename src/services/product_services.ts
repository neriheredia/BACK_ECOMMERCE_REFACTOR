import { Product } from 'interfaces'
import ProductModel from '../models/nosql/Product'

const createNewProduct = async (product: Product) => await new ProductModel(product)

export { createNewProduct }
