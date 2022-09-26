import { model, Schema } from 'mongoose'

const OrderSchema = new Schema(
  {
    address: { type: Object, required: true },
    amount: { type: Number, required: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, default: 1 }
      }
    ],
    status: { type: String, default: 'pending' },
    clientId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

const OrderModel = model('Order', OrderSchema)

export default OrderModel
