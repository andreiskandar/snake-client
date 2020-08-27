const connect = require('./client');

let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = conn => {
	connection = conn;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();

	stdin.on('data', handleUserInput);
	return stdin;
};

const handleUserInput = data => {
	//if user presses d-pad it should send the command to move snake
	// console.log(data);
	if (data === 's') {
		connection.write('Move: down');
	} else if (data === 'w') {
		connection.write('Move: up');
	} else if (data === 'd') {
		connection.write('Move: right');
	} else if (data === 'a') {
		connection.write('Move: left');
		//if user presses ctrl + c we do something
	} else if (data === '\u0003') {
		process.exit();
	}
};

module.exports = setupInput;
