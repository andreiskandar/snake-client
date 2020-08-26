const connect = require('./client');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = () => {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();

	stdin.on('data', handleUserInput);
	return stdin;
};
console.log('Connecting...');

const handleUserInput = data => {
	//if user presses d-pad it should send the command to move snake
	if (data === 's') {
		conn.write('Move: down');
	} else if (data === 'w') {
		conn.write('Move: up');
	} else if (data === 'd') {
		conn.write('Move: right');
	} else if (data === 'a') {
		conn.write('Move: left');
	}

	// console.log(data);
	//if user presses ctrl + c we do something
};

const conn = connect();

// connect();
setupInput();

// d3/snake/snake-client
