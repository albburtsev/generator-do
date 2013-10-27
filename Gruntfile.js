module.exports = function(grunt) {
	'use strict';

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			app: ['**/index.js', '!node_modules/**'],
		},
		watch: {
			app: {
				files: ['**/index.js'],
				tasks: ['jshint']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'watch']);
};
