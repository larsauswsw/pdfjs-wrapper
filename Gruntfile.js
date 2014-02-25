'use strict';
module.exports= function(grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);
	// Project configuration.
	grunt.initConfig();
	
	grunt.registerTask('default', function() {
		return true;
	});
};
