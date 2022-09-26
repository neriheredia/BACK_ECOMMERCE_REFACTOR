import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    isAdmin: { type: Boolean, default: false },
    avatar: {
      type: String,
      default:
        'https://drive.google.com/file/d/1W8ksgKj9ixezQXS9e58sdVIGx-xZmHsh/view?usp=sharing'
    },
    isClient: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isEmployee: { type: Boolean, default: false },
    email: {
      type: String,
      // eslint-disable-next-line no-useless-escape
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      maxlength: 100,
      required: true,
      unique: true
    },
    favoritesId: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
      default: []
    },
    firstName: { type: String, required: true },
    fullName: { type: String },
    lastName: { type: String, required: true },
    ordersId: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
      default: []
    },
    password: { type: String, minlength: 8, maxlength: 30, required: true },
    userName: { type: String, maxlength: 20, requred: true, unique: true }
  },
  { timestamps: true }
)

const UserModel = model('User', UserSchema)

export default UserModel
