'use strict';

let fs = require('fs');

class DataProvider {
	extract() {
		console.log('call extract');
		console.log(fs.readFileSync('./app/data.json'));
		return JSON.parse(fs.readFileSync('./app/data.json'));

		this.dummyMethod();
	}
	dummyMethod() {

	}
}

module.exports = DataProvider;