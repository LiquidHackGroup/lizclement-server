import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = Schema(
	{
		name: {
			type: String,
			maxlength: 50,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			trim: true,
			unique: 1,
			required: [true, 'Email address is required'],
		},
		phone: {
			type: Number,
			maxlength: 15,
			required: [true, 'Phone number is required'],
			default: 0,
		},
		countryCode: {
			type: Number,
			default: 254,
		},
		password: {
			type: String,
			minlength: 8,
			required: [true, 'Password is required'],
		},
		role: {
			type: String,
			maxlength: 50,
			required: [true, 'User role is required'],
		},
		gender: {
			type: String,
			maxlength: 50,
			required: [true, 'Gender is required'],
		},
		deliveryAddress: {
			type: Array,
			default: [],
		},
		isAdmin: {
			type: Boolean,
			default: false,
			required: [true, 'Admin boolean is required'],
		},
		isUserActive: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('users', userSchema);
