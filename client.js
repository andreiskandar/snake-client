const net = require('net');

const connect = () => {
	const conn = net.createConnection({
		host: '135.23.222.131',
		port: 50542,
	});

	conn.setEncoding('utf8');

	conn.on('connect', () => {
		console.log('Successfully connected to game server');
	});

	conn.on('connect', () => {
		conn.write('Name: AIS');
	});

	// detecting incoming data from the server then log the data
	conn.on('data', data => {
		console.log('you ded cuz you idled');
	});

	return conn;
};

module.exports = connect;
