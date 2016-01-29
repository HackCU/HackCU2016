module.exports = function(grunt) {
  grunt.initConfig({

    clean: ["dist"],

		copy: {
      copy_untouched_resources_to_dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: [
							'**/*',
							'!**/*.{png,jpg,gif}',
							'!js/*.js',
							'js/*.min.js'
						],
            dest: 'dist'
          }
        ]
      }
    },

		imagemin: {                          // Task
			dynamic: {
				files: [{
					expand: true,                  // Enable dynamic expansion
					cwd: 'src/',                   // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
					dest: 'dist/'                  // Destination path prefix
				}]
			}
    },

		uglify: {
			unminified_js: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: [
						'js/*.js',
						'!js/*.min.js'
					],
					dest: 'dist/'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['src/*'],
				tasks: ['default']
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('production', ['clean', 'copy', 'imagemin', 'uglify']);
  grunt.registerTask('default', ['newer:copy', 'newer:imagemin', 'newer:uglify']);

};
