// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
	
	// configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },
	
	// configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/perfmatters.js': 'src/js/perfmatters.js',
		  'dist/views/js/main.js': 'src/views/js/main.js'
        }
      }
    },
	
	// configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/style.css': 'src/css/style.css',
		  'dist/css/print.css': 'src/css/print.css',
		  'dist/views/css/style.css': 'src/views/css/style.css',
		  'dist/views/css/bootstrap-grid.css': 'src/views/css/bootstrap-grid.css'
        }
      }
    },
	
	htmlmin: {                                       // Task 
		dist: {                                      // Target 
		  options: {                                 // Target options 
			removeComments: true,
			collapseWhitespace: true
		  },
		  files: {                                   // Dictionary of files 
			'dist/index.html': 'src/index.html',     // 'destination': 'source' 
			'dist/project-2048.html': 'src/project-2048.html',
			'dist/project-mobile.html': 'src/project-mobile.html',
			'dist/project-webperf.html': 'src/project-webperf.html',
			'dist/views/pizza.html': 'src/views/pizza.html'
		  }
		}
    },
	
	imagemin: {                            // Task 
		dynamic: {                         // Target 
		  files: [{
			expand: true,                  // Enable dynamic expansion 
			cwd: 'src/',                   // Src matches are relative to this path 
			src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
			dest: 'dist/'                  // Destination path prefix 
		  }]
		}
    }
	
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'imagemin']);

};

