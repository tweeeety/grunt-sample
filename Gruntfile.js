module.exports = function(grunt) {
  // Gruntの設定
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // 各タスクの設定
  grunt.initConfig({
    uglify : {
      main : {
        files : {
          './js/sample.min.js' : ['./js/sample.js']
        }
      }
    },
    watch: {
      styles: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // defaultタスクの設定
  grunt.registerTask('default', ['uglify', 'watch']);

};
