import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();

dotenv.config();

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected successfully!'))
	.catch((error) => console.log(error));
app.use(cors('*'));
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({ limit: '30mb', extended: true })); // parse URL-encoded bodies
app.use(morgan('common'));

// Catch / routes
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to LizClement api endpoint!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on *:${PORT}`));
