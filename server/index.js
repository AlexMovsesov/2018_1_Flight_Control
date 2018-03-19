'use strict';

const path = require('path');
const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const debug = require('debug');
const uuid = require('uuid/v4');
const fest = require('fest');

const logger = debug('mylogger');
logger('Starting app');
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'data')));
app.use(body.json());
app.use(cookie());


const users = {
	'a.ostapenko@corp.mail.ru': {
		email: 'a.ostapenko@corp.mail.ru',
		password: 'password',
        username: 'sadsada',
		score: 72
	},
	'd.dorofeev@corp.mail.ru': {
		email: 'd.dorofeev@corp.mail.ru',
		password: 'password',
        username: 'fafad',
		score: 100500
	},
	'a.udalov@corp.mail.ru': {
		email: 'a.udalov@corp.mail.ru',
		password: 'password',
        username: 'asds',
		score: 72
	},
	'marina.titova@corp.mail.ru': {
		email: 'marina.titova@corp.mail.ru',
		password: 'password',
		username: '20',
		score: 72
	},
	'a.tyuldyukov@corp.mail.ru': {
		email: 'a.tyuldyukov@corp.mail.ru',
		password: 'password',
		age: 20,
		score: 72
	}
};
const ids = {};

app.post('/register', function (req, res) {
    console.log(req.body);
	const password = req.body.password;
	const email = req.body.email;
	const username = req.body.username;
	if (
		!password || !email || !username ||
		!password.match(/^\S{4,}$/) ||
		!email.match(/@/)
	) {
		return res.status(400).json({error: 'Не валидные данные пользователя'});
	}
	if (users[email] || users[username]) {
		return res.status(400).json({error: 'Пользователь уже существует'});
	}

	const id = uuid();
	const user = {password, email, username, score: 0};
	ids[id] = email;
	users[email] = user;

	res.cookie('frontend', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(201).json({id});
});

app.post('/authenticate', function (req, res) {
	console.log(req.body.password);
	const password = req.body.password;
	const email = req.body.email;
	if (!password || !email) {
		return res.status(400).json({error: 'Не указан E-Mail или пароль'});
	}
	if (!users[email] || users[email].password !== password) {
		return res.status(400).json({error: 'Не верный E-Mail и/или пароль'});
	}

	const id = uuid();
	ids[id] = email;

	res.cookie('frontend', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(201).json({id});
});

app.get('/get', function (req, res) {
	const id = req.cookies['frontend'];
	const email = ids[id];
	if (!email || !users[email]) {
		return res.status(401).end();
	}

	users[email].score += 1;
    //res.json({username: users[email].username});
	res.json(users[email]);
});

app.get('/users', function (req, res) {
	const scorelist = Object.values(users)
		.sort((l, r) => r.score - l.score)
		.map(user => {
			return {
				email: user.email,
				age: user.age,
				score: user.score
			};
		});

	res.json(scorelist);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
	logger(`Server listening port ${port}`);
});
