import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = Schema(
	{
		name: {
			type: String,
			maxlength: 5000,
			required: [true, 'Product name or title is required'],
		},
		imageUrl: {
			type: Array,
			default: [],
			required: [true, 'Image url is required'],
		},
		cloudinaryId: {
			type: Array,
			default: [],
			required: [true, 'Cloudinary id is required'],
		},
		unit: {
			type: String,
			maxlength: 50,
		},
		price: {
			type: Number,
			default: 0,
			required: [true, 'Product price is required'],
		},
		quantity: {
			type: Number,
			default: 0,
			required: [true, 'Product quantity is required'],
		},
		description: {
			type: String,
			maxlength: 524288,
			required: false,
		},
		status: {
			type: String,
			maxlength: 50,
			enum: ['selling', 'draft'],
			default: 'draft',
		},
		published: {
			type: Boolean,
			default: false,
			required: false,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: [true, 'Product owner id is required'],
		},
	},
	{ timestamps: true }
);

productsSchema.index(
	{
		name: 'text',
		description: 'text',
	},
	{
		weights: {
			name: 5,
			description: 1,
		},
	}
);

export default mongoose.model('products', productsSchema);
