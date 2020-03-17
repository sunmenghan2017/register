module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    }, 
    cssmin: {  
      'dist/index.min.css': 'index.css'
    },
    uglify: {                //制定插件的名字
      build: {              //制定任务的名字 
        options: {
           mangle: false   //默认混淆变量名和函数名
        }        
      },
      release:{
        files: {
          'dist/index.min.js': 'index.js'
        }
      }  
    } 
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('minify', ['htmlmin','cssmin','uglify']);    
};