import express from 'express';

import {
	getUsers,
	adminSignup,
	customerSignup,
	updateUserInfo,
	signin,
	changePassword,
	forgotPassword,
} from '../controllers/users.js';
import { profile } from '../controllers/profile.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', auth, profile);
router.get('/customers', auth, getUsers);
router.post('/signin', signin);
router.post('/admin/signup', adminSignup);
router.post('/customer/signup', customerSignup);
router.put('/profile', auth, updateUserInfo);
router.put('/update-password', auth, changePassword);
router.put('/forgot-password', forgotPassword);

export default router;
