var browserify = require('browserify');
var b = browserify();

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {

            components: {
                debug: true,
                src: [],
                dest: 'components-bundled.js',
                options: {
                    transform: ['reactify'],
                    preBundleCB: function (b) {
                        b.require('react');
                        b.require('./build/components.js');
                    }
                }
            },

            app: {
                debug: true,
                src: 'app2.js',
                dest: 'app2-bundled.js',
                options: {
                    transform: ['reactify'],
                    preBundleCB: function (b) {
                        b.external('react');
                        b.external('./build/components.js');
                    }
                }
            }
        },

        watch: {
            
            components: {
                files: ['components/*.jsx'],
                tasks: ['browserify:components']
            },

            app: {
                files: ['app*.js'], 
                tasks: ['browserify:app']
            },

            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['browserify:components','browserify:app']);
    grunt.registerTask('server', ['build', 'watch']);
};