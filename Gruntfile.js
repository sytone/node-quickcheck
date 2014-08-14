module.exports = function(grunt) {
  grunt.initConfig({
		exec: {
      test: "npm test",
      jshint: "jshint .",
      aspelllint: "bundle exec aspelllint"
		}
  });

  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", ["exec:test"]);
  grunt.registerTask("test", ["exec:test"]);
  grunt.registerTask("lint", ["exec:jshint"]);
  grunt.registerTask("aspelllint", ["exec:aspelllint"]);
};
