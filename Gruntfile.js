module.exports = function(grunt) {'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        watch : {
            scripts : {
                files : ['**/*.js'],
                tasks : ['jshint'],
                options : {
                    spawn : false
                }
            }
        },
        jshint : {
            all : ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        }
    });

    grunt.registerTask('default', ['jshint', 'watch']);
};
