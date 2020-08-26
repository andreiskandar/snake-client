const net = require('net');

const connect = () => {
	const conn = net.createConnection({
		host: '10.0.2.15',
		port: 50541,
	});

	conn.setEncoding('utf8');

	// detecting incoming data from the server then log the data
	conn.on('data', data => {
		console.log('you ded cuz you idled');
	});
	return conn;
};

console.log('Connecting ...');
connect();
