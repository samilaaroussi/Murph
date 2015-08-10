
module.exports = function (grunt) {
    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9997,
                    hostname: '0.0.0.0'
                },
            }
        },

        browserify: {

            components: {
                src: [],
                dest: 'components-bundled.js',
                options: {
                    alias: ['./components.js:components'],
                    transform: ['reactify'],
                    require: ['react', 'lodash', 'swiper', 'stilr', './components.js']
                }
            },

            app: {
                src: 'app.js',
                dest: 'app-bundled.js',
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
                livereload: true,
                keepalive: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['browserify:components','browserify:app']);
    grunt.registerTask('server', ['build', 'connect', 'watch']);
};