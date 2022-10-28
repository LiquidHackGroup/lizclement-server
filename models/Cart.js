import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
		required: [true, 'User id is required'],
	},

	items: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				ref: 'products',
				required: [true, 'Product id is required'],
			},
			name: String,
			owner: {
				type: Schema.Types.ObjectId,
				ref: 'users',
				required: [true, 'Product owner id is required'],
			},
			imageUrl: {
				type: Array,
				default: [],
				required: [true, 'Image url is required'],
			},
			quantity: {
				type: Number,
				required: true,
				min: [1, 'Quantity can not be less then 1.'],
				default: 1,
			},
			price: Number,
			vat: Number,
			date: {
				type: Date,
				default: Date.now(),
			},
		},
	],
	subTotal: {
		type: Number,
		required: true,
		default: 0,
	},
	vat: {
		type: Number,
		required: true,
		default: 0,
	},
	total: {
		type: Number,
		required: true,
		default: 0,
	},
});

export default mongoose.model('cart-products', cartSchema);
