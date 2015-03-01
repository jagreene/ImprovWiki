module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      command: 'ember build; cp -rf dist/assets/ dist/index.html ../server/public'
    },
    watch: {
      files: ['app/controllers/*','app/templates/*','app/router.js','app/helpers/*','app/components/*','app/views/*','app/styles/*','app/models/*','app/app.js'],
      tasks: 'exec'
    }
  });

  // Load plugins and tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  // Custom tasks.
  grunt.registerTask('default','watch');
  grunt.registerTask('exec','exec');
};
