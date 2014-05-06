
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            js: {
                files: ['jquery.creep.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: 'example.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            }
        },

        // we use the Sass
        sass: {
            dist: {
                options: {
                    // nested, compact, compressed, expanded
                    style: 'compressed'
                },
                files: {
                    'example.css': 'example.scss'
                }
            }
        },

        // uglify to concat & minify
        uglify: {
            js: {
                files: {
                    'jquery.creep.min.js': 'jquery.creep.js',
                }
            }
        }

    });

    // register task
    grunt.registerTask('default', ['watch']);
};