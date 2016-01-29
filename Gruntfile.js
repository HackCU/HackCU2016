module.exports = function(grunt) {

  grunt.initConfig({
    clean: ["dist"]
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('production', []);
  grunt.registerTask('default', []);
};
