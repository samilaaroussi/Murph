module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {

		  	components: {
		    	src: [],
		        dest: 'components-bundled.js',
	        	browserifyOptions: {
	        		debug: true,
		        	transform: ['reactify'],
	        		require: ['./components.js', 'react']
	        	}
		    },

		    app: {
		        src: 'app2.js',
		        dest: 'app2-bundled.js',
				browserifyOptions: {
		        	debug: true,
		        	transform: ['reactify'],
		        	external: ['./components.js', 'react']
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
	grunt.registerTask('server', ['browserify:components','browserify:app']);
};