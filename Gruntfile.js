module.exports = function(grunt) {

  grunt.initConfig({
    clean: ["dist"],
		copy: {
      copy_untouched_resources_to_dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*'],
            dest: 'dist'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('production', []);
  grunt.registerTask('default', []);
};
