module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['../javascripts/*.js', '../javascripts/**/*.js'],
        dest: '../dist/bundle.js',
      },
    },
    jshint: {
      options: {
        predef: ["document", "console", "alert", "$", "app", "angular"],
        esnext: true,
        globalstrict: true,
        globals: {"$": true},
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
    sass: {
      dist:{
        files: {
          '../css/main.css': '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'concat']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['concat', 'jshint', 'sass', 'watch']);
};
