import { Product } from 'interfaces'
import ProductModel from '../models/nosql/Product'

const createNewProduct = async (product: Product) => await new ProductModel(product)

const getAllProducts = async () => await ProductModel.find({})

const updateProduct = async (product: Product) => await ProductModel.updateOne(product)

export { createNewProduct, getAllProducts, updateProduct }
