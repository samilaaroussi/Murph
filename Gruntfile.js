module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {

            components: {
                src: [],
                dest: 'components-bundled.js',
                options: {
                    transform: ['reactify'],
                    browserifyOptions: {
                        require: ['./components.js']
                    },
                    require: ['react']
                }
            },

            app: {
                src: 'app2.js',
                dest: 'app2-bundled.js',
                options: {
                    transform: ['reactify'],
                    browserifyOptions: {
                        external: ['./components.js']
                    },
                    external: ['react']
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