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
                dest: 'dist/components.js',
                options: {
                    alias: ['./app/components.js:components'],
                    transform: ['reactify'],
                    require: ['react', 'lodash', 'swiper', 'stilr', './app/components.js']
                }
            },

            app: {
                expand: true,
                cwd: 'app/pages',
                src: '**/*.js',
                dest: 'dist/',
                options: {
                    transform: ['reactify'],
                    external: ['react', 'lodash', 'swiper', 'stilr', 'components']
                }
            }
        },

        copy: {
          main: {
            src: ['app/index.html', 'app/libs/katana.js', 'app/libs/app-load.js'],
            dest: 'dist/',
          },
        },

        watch: {
            
            components: {
                files: ['app/components/**/*.jsx'],
                tasks: ['browserify:components']
            },

            app: {
                files: ['app/pages/**/*.js'], 
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['browserify:components','browserify:app']);
    grunt.registerTask('server', ['build', 'copy', 'connect', 'watch']);
};