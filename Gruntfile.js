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
                tasks : ['test'],
                options : {
                    spawn : false
                }
            }
        },
        jshint : {
            all : ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        jasmine : {
            src : 'src/**/*.js',
            options : {
                specs : 'test/*.spec.js',
                vendor : ['bower_components/jquery/dist/jquery.min.js']
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['test', 'watch']);
    grunt.registerTask('build', []);
};
