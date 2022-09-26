import { model, Schema } from 'mongoose'

const CartSchema = new Schema(
  {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ],
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true }
  },
  { timestamps: true }
)

const CartModel = model('Cart', CartSchema)

export default CartModel
