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
                	alias: ['./components.js:components'],
                    transform: ['reactify'],
                    require: ['react', 'lodash', 'swiper', 'stilr', './components.js']
                }
            },

            app: {
                debug: true,
                src: 'app2.js',
                dest: 'app2-bundled.js',
                options: {
                    transform: ['reactify'],
                    external: ['react', 'lodash', 'swiper', 'stilr', 'components']
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