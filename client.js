const net = require('net');
const { IP, PORT } = require('./constants');
const name = process.argv.slice(2);

const connect = () => {
	const conn = net.createConnection({
		host: IP,
		port: PORT,
	});

	conn.setEncoding('utf8');

	conn.on('connect', () => {
		console.log('Successfully connected to game server');
		conn.write(`Name: ${name}`);
		//hard-coded
		// setInterval(() => {
		// 	conn.write('Move: down');
		// }, 500);
	});

	// detecting incoming data from the server then log the data
	conn.on('data', data => {
		console.log('you ded cuz you idled');
	});

	return conn;
};

module.exports = connect;
