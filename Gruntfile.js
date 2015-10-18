module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    watch: {
      css: {
        files: ['resources/css/desktop.css', 'resources/css/mobile.css'],
        tasks: ['concat', 'cssmin'],
      },
      js: {
        files: ['resources/js/functions.js'],
        tasks: ['uglify'],
      }
    },
    uglify: {
      options: {
        mangle: false,
        preserveComments: true
      },
      dist: {
        files: {
          'resources/js/functions.min.js': ['resources/js/functions.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          'resources/css/styles.css': ['resources/css/desktop.css', 'resources/css/mobile.css']
        },
        {
          'vendor/fullpage.js/jquery.fullPage.min.css': ['vendor/fullpage.js/jquery.fullPage.css']
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin', 'uglify']);

};
