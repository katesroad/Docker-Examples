const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
	res.cookie('app', 'app', {
		path: '/',
		secure: false
	});

	return res.end('hello, world');
});


app.get('/data', (req, res) => {
	console.info(req.cookies);

	return res.json({
		data: 'data',
		date: new Date().toISOString(),
	})
})

app.listen(5000, () => {
	console.log('App is runing');
})