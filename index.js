var fs   = require('fs');
var path = require('path');

module.exports = function dmpMath ($, document, done) {
	$.root().append(fs.readFileSync(
		path.join(__dirname, 'assets/math.html'),
		{ encoding: 'UTF-8' }
	));

	done();
};
