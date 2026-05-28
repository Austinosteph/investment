const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Ventorix Backend Running');
});

//router
// const CertificateRouter = require('./routes/certificate');
// const generateCertificateRouter = require('./routes/generateCertificate');
// const authRouter = require('./routes/auth');

// // route
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/certificate', CertificateRouter);
// app.use('/api/v1/generatecertificate', generateCertificateRouter);

//database
const connectDB = require('./db/connect');
const port = process.env.PORT || 5000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`Server is listening port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
