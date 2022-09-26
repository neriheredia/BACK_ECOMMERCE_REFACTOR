import { model, Schema } from 'mongoose'
import { Product } from '../../interfaces/product_interface'

const ProductSchema = new Schema<Product>(
  {
    color: { type: Array, default: [] },
    costPrice: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true, default: [] },
    inStock: { type: Boolean, default: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    salePrice: { type: Number, required: true },
    size: { type: Array, default: [] },
    title: { type: String, required: true, unique: true }
  },
  { timestamps: true }
)

const ProductModel = model('Product', ProductSchema)

export default ProductModel
