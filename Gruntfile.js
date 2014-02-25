module.exports = function(grunt) {'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        watch : {
            scripts : {
                files : ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
                tasks : ['jshint', 'test'],
                options : {
                    spawn : false
                }
            }
        },
        connect : {
            test : {
                options : {
                    port : 8000
                }
            }
        },
        jshint : {
            all : ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        jasmine : {
            src : 'src/**/*.js',
            options : {
                keepRunner : true,
                host : 'http://127.0.0.1:8000',
                specs : 'test/*.spec.js',
                vendor : ['bower_components/jquery/dist/jquery.min.js', 'vendor/pdf.combined.js']
            }
        }
    });

    grunt.registerTask('test', ['connect:test', 'jasmine']);
    grunt.registerTask('default', ['jshint', 'test', 'watch']);
    grunt.registerTask('build', []);
};
