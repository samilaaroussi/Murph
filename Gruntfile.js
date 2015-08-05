module.exports = function (grunt) {
    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'app',
                    keepalive: true,
                    open: {
                    target: 'http://localhost:9000'
                    }
                }
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
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['browserify:components','browserify:app', 'connect']);
    grunt.registerTask('server', ['build', 'watch', 'connect']);
};