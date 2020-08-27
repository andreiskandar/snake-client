const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_UP_KEY, MOVE_RIGHT_KEY } = require('./constants');

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

	// stdin.on('data', data => {});
	stdin.on('data', handleUserInput);
	return stdin;
};

const handleUserInput = data => {
	//if user presses d-pad it should send the command to move snake
	connection.write('Say: Hello Wednesday');

	if (data === MOVE_DOWN_KEY) {
		connection.write('Move: down');
	} else if (data === MOVE_UP_KEY) {
		connection.write('Move: up');
	} else if (data === MOVE_RIGHT_KEY) {
		connection.write('Move: right');
	} else if (data === MOVE_LEFT_KEY) {
		connection.write('Move: left');
		//if user presses ctrl + c we do something
	} else if (data === '\u0003') {
		process.exit();
	}
};

module.exports = setupInput;
