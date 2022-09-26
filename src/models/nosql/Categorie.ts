import { model, Schema } from 'mongoose'

const CategorieSchema = new Schema(
  {
    productId: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    name: { type: String }
  },
  { timestamps: true }
)

const CategorieModel = model('Categorie', CategorieSchema)

export default CategorieModel
