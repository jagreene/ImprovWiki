module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      command: 'ember build'
    },
    watch: {
      files: ['app/**'],
      tasks: 'exec'
    }
  });

  // Load plugins and tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  // Custom tasks.
  grunt.registerTask('default','watch');
};
